import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UpdatePetComponent {
  selectedPet: PetModel | null = null;
  selectedPetName: string | null | undefined = '';

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Update pet component';
  }

  constructor(private petsService: PetsService) {
    this.petsService.selectedPet$.subscribe((selectedPet) => {
      this.selectedPet = selectedPet;
      this.selectedPetName = selectedPet?.name;
    });
  }

  update(): void {
    if (this.selectedPetName) {
      this.petsService.updateSelectedPet(this.selectedPetName);
    }
  }
}
