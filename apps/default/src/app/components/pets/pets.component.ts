import { Component } from '@angular/core';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent {
  pets: Array<PetModel> = this.petsService.pets;

  constructor(private petsService: PetsService) {}
}
