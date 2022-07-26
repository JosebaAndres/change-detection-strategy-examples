import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePetComponent {
  selectedPet$: Observable<PetModel | null> = this.petsService.selectedPet$;
  selectedPetName: string | null | undefined = '';

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Update pet component';
  }

  constructor(
    private petsService: PetsService,
    private cdr: ChangeDetectorRef
  ) {
    this.petsService.selectedPet$.subscribe((selectedPet) => {
      this.selectedPetName = selectedPet?.name;
      this.cdr.markForCheck();
    });
  }

  update(): void {
    if (this.selectedPetName) {
      this.petsService.updateSelectedPet(this.selectedPetName);
    }
  }
}
