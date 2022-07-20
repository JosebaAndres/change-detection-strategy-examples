import { Component, Input } from '@angular/core';
import { PetModel } from '../../models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent {
  @Input() pets: Array<PetModel> | undefined | null;
}
