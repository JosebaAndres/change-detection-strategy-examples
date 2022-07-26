import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PETS } from '../mocks/pets';
import { PetModel } from '../models/pet';

@Injectable({ providedIn: 'root' })
export class PetsService {
  pets: Array<PetModel> = PETS;
  private _selectedPetId$ = new BehaviorSubject<number | null>(null);
  selectedPetId$ = this._selectedPetId$.asObservable();
  private _selectedPet$ = new BehaviorSubject<PetModel | null>(null);
  selectedPet$ = this._selectedPet$.asObservable();

  setSelectedPetId(value: number | null) {
    this._selectedPetId$.next(value);
    const fintPet = this.pets.find((pet) => pet.id === value);
    if (fintPet !== undefined) {
      this._selectedPet$.next(fintPet);
    } else {
      this._selectedPet$.next(null);
    }
  }

  createPet(name: string) {
    const newPet = new PetModel({
      id: this.getNewId(),
      name: name,
    });

    // Update the currect list
    this.pets.unshift(new PetModel(newPet));

    // Crete a new list with the new item
    // this.pets$.next([...[newPet], ...this.pets$.value]);
  }

  updateSelectedPet(name: string) {
    if (this._selectedPet$.value) {
      // Update the name property
      // this._selectedPet$.value.name = name;

      // Update the item instance in the array and in the selected pets
      const newPet = this._selectedPet$.value.clone();
      newPet.name = name;
      this.pets[this.pets.indexOf(this._selectedPet$.value)] = newPet;
      this._selectedPet$.next(newPet);

      // Update the item instance, the array instance and in the selected pets
      // const newPet = this._selectedPet$.value.clone();
      // newPet.name = name;
      // const newPets = [...this.pets$.value];
      // newPets[newPets.indexOf(this._selectedPet$.value)] = newPet;
      // this.pets$.next(newPets);
      // this._selectedPet$.next(newPet);
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
