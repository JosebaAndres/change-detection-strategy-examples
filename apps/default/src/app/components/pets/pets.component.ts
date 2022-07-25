import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

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

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Pets component';
  }

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  constructor(private petsService: PetsService) {}
}
