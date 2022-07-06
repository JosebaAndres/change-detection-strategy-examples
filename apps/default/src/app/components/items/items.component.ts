import { Component, Input } from '@angular/core';
import { ItemModel } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  @Input() items: Array<ItemModel> | undefined | null;
}
