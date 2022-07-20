import { Injectable } from '@angular/core';
import { Pets } from '../mocks/pets';
import { PetModel } from '../models/pet';

@Injectable({ providedIn: 'root' })
export class PetsService {
  pets: Array<PetModel> = Pets;
}
