import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  ReplaySubject,
  Subject,
  takeUntil,
} from 'rxjs';
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
  private pet$ = new BehaviorSubject<PetModel | null>(null);

  @Input() pet!: PetModel;

  @ViewChild('createItemCount', { static: true })
  createItemCount!: ElementRef<HTMLSpanElement>;

  @ViewChild('descriptionGetCount', { static: true })
  descriptionGetCount!: ElementRef<HTMLSpanElement>;

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Pet list item component';
  }

  isSelected = false;

  constructor(
    private petsService: PetsService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    combineLatest([this.pet$, this.petsService.selectedPetId$])
      .pipe(
        map(([pet, selectedPetId]) => {
          if (pet && pet.id === selectedPetId) {
            return true;
          } else {
            return false;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        if (this.isSelected !== value) {
          this.isSelected = value;
          this.cdr.markForCheck();
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet']) {
      this.pet$.next(this.pet);
      this.refreshPet();
    }

    if (changes['pet'] && changes['pet'].firstChange) {
      this.ngZone.runOutsideAngular(() => {
        this.pet.addCreateItemCount();
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  selectPet() {
    this.petsService.setSelectedPetId(this.pet.id);
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

        this.pet.createItemCount$
          .pipe(takeUntil(this.destroy$), takeUntil(this.petChanged$))
          .subscribe((value) => {
            this.createItemCount.nativeElement.innerHTML = value.toString();
          });
      }
    });
  }
}
