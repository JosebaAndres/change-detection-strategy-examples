import { Injectable } from '@angular/core';
import { PETS } from '../mocks/pets';
import { PetModel } from '../models/pet';

@Injectable({ providedIn: 'root' })
export class PetsService {
  pets: Array<PetModel> = PETS;
  private _selectedPetId: number | null = null;
  get selectedPetId(): number | null {
    return this._selectedPetId;
  }
  private _selectedPet: PetModel | null = null;
  get selectedPet(): PetModel | null {
    return this._selectedPet;
  }

  setSelectedPetId(value: number | null) {
    this._selectedPetId = value;
    const fintPet = this.pets.find((pet) => pet.id === value);
    if (fintPet !== undefined) {
      this._selectedPet = fintPet;
    } else {
      this._selectedPet = null;
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
    if (this.selectedPet) {
      this.selectedPet.name = name;
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
