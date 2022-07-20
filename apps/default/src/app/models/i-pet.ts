import { Observable } from 'rxjs';

export interface IPetModel {
  id: number;
  name: string;
  nameGetCount$: Observable<number>;
}
