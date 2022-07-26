import { BehaviorSubject, Observable } from 'rxjs';
import { IPetModel } from './i-pet';

export class PetModel implements IPetModel {
  id: number;
  private _name = '';
  get name(): string {
    this.addNameGetCount();
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  private _nameGetCount$: BehaviorSubject<number>;
  nameGetCount$: Observable<number>;

  constructor(params: { id: number; name: string; nameGetCount?: number }) {
    this.id = params.id;
    this.name = params.name;
    if (params.nameGetCount === undefined) {
      this._nameGetCount$ = new BehaviorSubject<number>(0);
    } else {
      this._nameGetCount$ = new BehaviorSubject<number>(params.nameGetCount);
    }
    this.nameGetCount$ = this._nameGetCount$.asObservable();
  }

  private addNameGetCount() {
    this._nameGetCount$.next(this._nameGetCount$.value + 1);
  }

  clone() {
    return new PetModel({
      id: this.id,
      name: this.name,
      nameGetCount: this._nameGetCount$.value,
    });
  }
}
