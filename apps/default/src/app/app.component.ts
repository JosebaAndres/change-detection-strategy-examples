import { Component } from '@angular/core';
import { HeroModel } from './models/hero';
import { HeroesService } from './services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  heroes: Array<HeroModel> = this.heroesService.heroes;

  constructor(private heroesService: HeroesService) {
  }
}
