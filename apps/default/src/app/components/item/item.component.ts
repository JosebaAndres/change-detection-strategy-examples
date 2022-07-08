import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { ItemModel } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnChanges {
  private destroy$ = new ReplaySubject<void>();
  private modelChanged$ = new Subject<void>();

  @Input() model!: ItemModel;

  @ViewChild('descriptionGetCount', { static: true })
  descriptionGetCount!: ElementRef<HTMLSpanElement>;

  isInEditMode = false;
  modelDescription = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['model']) {
      this.refreshModel();
    }
  }

  refreshModel() {
    this.modelChanged$.next();
    if (this.model) {
      this.model.descriptionGetCount$
        .pipe(takeUntil(this.destroy$), takeUntil(this.modelChanged$))
        .subscribe((value) => {
          this.descriptionGetCount.nativeElement.innerHTML = value.toString();
        });
    }
  }

  edit() {
    this.modelDescription = this.model.description;
    this.isInEditMode = true;
  }

  save() {
    this.model.description = this.modelDescription;
    this.isInEditMode = false;
  }

  cancel() {
    this.isInEditMode = false;
  }
}
