import { Observable } from 'rxjs';

export interface IHeroModel {
  id: number;
  name: string;
  nameGetCount$: Observable<number>;
}
