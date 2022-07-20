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

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnChanges, OnDestroy {
  private destroy$ = new ReplaySubject<void>();
  private petChanged$ = new Subject<void>();

  @Input() pet!: PetModel;

  @ViewChild('descriptionGetCount', { static: true })
  descriptionGetCount!: ElementRef<HTMLSpanElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pet']) {
      this.refreshPet();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  refreshPet() {
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
