import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PetsComponent {
  get pets(): Array<PetModel> {
    return this.petsService.pets;
  }
  get selectedPet(): PetModel | null {
    return this.petsService.selectedPet;
  }

  constructor(private petsService: PetsService) {}
}
