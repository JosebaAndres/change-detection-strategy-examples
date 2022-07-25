import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContextComponent {
  private changeDetectionLaunchedCount = 0;

  @Input() title!: string;

  @ViewChild('appContext', { static: true })
  appContext!: ElementRef<HTMLDivElement>;

  constructor(private ngZone: NgZone) {}

  changeDetectionLaunched() {
    this.ngZone.runOutsideAngular(() => {
      this.addChangeDetectionLaunched();
      setTimeout(() => {
        this.removeChangeDetectionLaunched();
      }, 0);
    });
  }

  addChangeDetectionLaunched() {
    this.changeDetectionLaunchedCount = this.changeDetectionLaunchedCount + 1;
    if (this.changeDetectionLaunchedCount === 1) {
      this.appContext.nativeElement.classList.remove(
        'app-context--no-detect-changes'
      );
      this.appContext.nativeElement.classList.add(
        'app-context--detect-changes'
      );
    }
  }

  removeChangeDetectionLaunched() {
    this.changeDetectionLaunchedCount = this.changeDetectionLaunchedCount - 1;
    if (this.changeDetectionLaunchedCount === 0) {
      this.appContext.nativeElement.classList.add(
        'app-context--no-detect-changes'
      );
      this.appContext.nativeElement.classList.remove(
        'app-context--detect-changes'
      );
    }
  }
}
