import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PetModel } from '../../models/pet';
import { ContextComponent } from '../context/context.component';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PetListComponent {
  @Input() pets: Array<PetModel> | undefined | null;

  @Input() selectPetId: number | null = null;
  @Output() selectPetIdChange = new EventEmitter<number>();

  @ViewChild('appContext', { static: true }) appContext!: ContextComponent;

  get title(): string {
    this.appContext.changeDetectionLaunched();
    return 'Pet list component';
  }

  selectPetIdNext(petId: number) {
    this.selectPetIdChange.next(petId);
  }
}
