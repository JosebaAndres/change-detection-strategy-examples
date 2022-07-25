import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PETS } from '../mocks/pets';
import { PetModel } from '../models/pet';

@Injectable({ providedIn: 'root' })
export class PetsService {
  pets: Array<PetModel> = PETS;
  private _selectedPetId: number | null = null;
  get selectedPetId(): number | null {
    return this._selectedPetId;
  }
  private _selectedPet$ = new BehaviorSubject<PetModel | null>(null);
  selectedPet$ = this._selectedPet$.asObservable();

  setSelectedPetId(value: number | null) {
    this._selectedPetId = value;
    const fintPet = this.pets.find((pet) => pet.id === value);
    if (fintPet !== undefined) {
      this._selectedPet$.next(fintPet);
    } else {
      this._selectedPet$.next(null);
    }
  }

  createPet(name: string) {
    this.pets.unshift(
      new PetModel({
        id: this.getNewId(),
        name: name,
      })
    );
  }

  updateSelectedPet(name: string) {
    if (this._selectedPet$.value) {
      this._selectedPet$.value.name = name;
    }
  }

  private getNewId(): number {
    if (this.pets.length === 0) {
      return 0;
    } else {
      return this.pets[0].id + 1;
    }
  }
}
