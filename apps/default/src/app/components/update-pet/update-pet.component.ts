import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UpdatePetComponent implements OnChanges {
  value: string | null | undefined = '';

  @Input() selectedPet: PetModel | null = null;

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Update pet component';
  }

  constructor(private petsService: PetsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPet']) {
      this.value = this.selectedPet?.name;
    }
  }

  update(): void {
    if (this.value) {
      this.petsService.updateSelectedPet(this.value);
    }
  }
}
