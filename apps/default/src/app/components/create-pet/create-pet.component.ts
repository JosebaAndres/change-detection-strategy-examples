import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CreatePetComponent {
  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  value = '';

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Create pet component';
  }

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
