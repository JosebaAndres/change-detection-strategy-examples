import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PetModel } from '../../models/pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
})
export class PetListComponent {
  @Input() pets: Array<PetModel> | undefined | null;

  @Input() selectPetId: number | null = null;
  @Output() selectPetIdChange = new EventEmitter<number>();

  selectPetIdNext(petId: number) {
    this.selectPetIdChange.next(petId);
  }
}
