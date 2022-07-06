import { Component, Input } from '@angular/core';
import { ItemModel } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() model!: ItemModel;
}