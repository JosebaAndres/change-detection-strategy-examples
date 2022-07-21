import { Component } from '@angular/core';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss'],
})
export class CreatePetComponent {
  value = '';

  constructor(private petsService: PetsService) {}

  add() {
    const name = this.value;
    this.value = '';
    if (!name) {
      return;
    }
    this.petsService.createPet(name);
  }
}
