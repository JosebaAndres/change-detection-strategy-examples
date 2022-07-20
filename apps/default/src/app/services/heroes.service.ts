import { Injectable } from '@angular/core';
import { HEROES } from '../mocks/heroes';
import { HeroModel } from '../models/hero';

@Injectable({ providedIn: 'root' })
export class HeroesService {
  heroes: Array<HeroModel> = HEROES;
}
