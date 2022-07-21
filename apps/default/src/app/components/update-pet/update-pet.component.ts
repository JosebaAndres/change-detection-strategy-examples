import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PetModel } from '../../models/pet';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss'],
})
export class UpdatePetComponent implements OnChanges {
  value: string | null | undefined = '';

  @Input() selectedPet: PetModel | null = null;

  constructor(private petsService: PetsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPet']) {
      this.value = this.selectedPet?.name;
    }
  }

  update(): void {
    if (this.value) {
      this.petsService.updateSelectedPet(this.value);
    }
  }
}
