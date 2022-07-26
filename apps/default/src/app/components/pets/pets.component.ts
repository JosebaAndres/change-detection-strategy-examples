import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetsComponent {
  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Pets component';
  }

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;
}
