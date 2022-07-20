import { Component, Input } from '@angular/core';
import { HeroModel } from '../../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  @Input() heroes: Array<HeroModel> | undefined | null;
}
