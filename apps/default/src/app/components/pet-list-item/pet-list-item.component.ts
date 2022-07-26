import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetListItemComponent implements OnChanges, OnDestroy {
  private destroy$ = new ReplaySubject<void>();
  private petChanged$ = new Subject<void>();

  @Input() pet!: PetModel;

  @ViewChild('descriptionGetCount', { static: true })
  descriptionGetCount!: ElementRef<HTMLSpanElement>;

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Pet list item component';
  }

  constructor(private petsService: PetsService, private ngZone: NgZone) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet']) {
      this.refreshPet();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  selectPet() {
    this.petsService.setSelectedPetId(this.pet.id);
  }

  isSelected(): boolean {
    if (this.pet.id == this.petsService.selectedPetId) {
      return true;
    } else {
      return false;
    }
  }

  private refreshPet() {
    this.ngZone.runOutsideAngular(() => {
      this.petChanged$.next();
      if (this.pet) {
        this.pet.nameGetCount$
          .pipe(takeUntil(this.destroy$), takeUntil(this.petChanged$))
          .subscribe((value) => {
            this.descriptionGetCount.nativeElement.innerHTML = value.toString();
          });
      }
    });
  }
}
