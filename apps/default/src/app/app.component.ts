import { Component } from '@angular/core';
import { PetModel } from './models/pet';
import { PetsService } from './services/pets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pets: Array<PetModel> = this.petsService.pets;

  constructor(private petsService: PetsService) {
  }
}
