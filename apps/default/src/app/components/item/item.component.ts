import { Component, Input } from '@angular/core';
import { ItemModel } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() model!: ItemModel;

  isInEditMode = false;
  modelDescription = '';

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
