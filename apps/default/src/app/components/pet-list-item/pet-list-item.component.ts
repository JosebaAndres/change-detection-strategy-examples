import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html',
  styleUrls: ['./pet-list-item.component.scss'],
})
export class PetListItemComponent implements OnChanges, OnDestroy {
  private destroy$ = new ReplaySubject<void>();
  private petChanged$ = new Subject<void>();

  @Input() pet!: PetModel;

  @ViewChild('descriptionGetCount', { static: true })
  descriptionGetCount!: ElementRef<HTMLSpanElement>;

  constructor(private petsService: PetsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet']) {
      this.refreshPet();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  selectPet() {
    this.petsService.selectedPetId = this.pet.id;
  }

  isSelected(): boolean {
    if (this.pet.id == this.petsService.selectedPetId) {
      return true;
    } else {
      return false;
    }
  }

  private refreshPet() {
    this.petChanged$.next();
    if (this.pet) {
      this.pet.nameGetCount$
        .pipe(takeUntil(this.destroy$), takeUntil(this.petChanged$))
        .subscribe((value) => {
          this.descriptionGetCount.nativeElement.innerHTML = value.toString();
        });
    }
  }
}
