import { Component, Input } from '@angular/core';
import { PetModel } from '../../models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  @Input() pets: Array<PetModel> | undefined | null;
}
