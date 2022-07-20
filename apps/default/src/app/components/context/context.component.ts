import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
})
export class ContextComponent {
  @Input() title!: string;
}
