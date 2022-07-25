import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextComponent {
  @Input() title!: string;

  // @Input() title!: string;
}
