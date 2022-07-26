import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Observable, ReplaySubject, takeUntil } from 'rxjs';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePetComponent implements OnDestroy {
  private destroy$ = new ReplaySubject<void>();
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
    this.petsService.selectedPet$
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedPet) => {
        this.selectedPetName = selectedPet?.name;
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  update(): void {
    if (this.selectedPetName) {
      this.petsService.updateSelectedPet(this.selectedPetName);
    }
  }
}
