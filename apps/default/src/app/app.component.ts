import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ContextComponent } from './components/context/context.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'App component';
  }
}
