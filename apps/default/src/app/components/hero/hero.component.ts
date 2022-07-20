import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { HeroModel } from '../../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnChanges {
  private destroy$ = new ReplaySubject<void>();
  private heroChanged$ = new Subject<void>();

  @Input() hero!: HeroModel;

  @ViewChild('descriptionGetCount', { static: true })
  descriptionGetCount!: ElementRef<HTMLSpanElement>;

  isInEditMode = false;
  heroName = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hero']) {
      this.refreshHero();
    }
  }

  refreshHero() {
    this.heroChanged$.next();
    if (this.hero) {
      this.hero.nameGetCount$
        .pipe(takeUntil(this.destroy$), takeUntil(this.heroChanged$))
        .subscribe((value) => {
          this.descriptionGetCount.nativeElement.innerHTML = value.toString();
        });
    }
  }

  edit() {
    this.heroName = this.hero.name;
    this.isInEditMode = true;
  }

  save() {
    this.hero.name = this.heroName;
    this.isInEditMode = false;
  }

  cancel() {
    this.isInEditMode = false;
  }
}
