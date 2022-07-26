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

  private _createItemCount$: BehaviorSubject<number>;
  createItemCount$: Observable<number>;

  constructor(params: {
    id: number;
    name: string;
    nameGetCount?: number;
    createItemCount?: number;
  }) {
    this.id = params.id;
    this.name = params.name;
    if (params.nameGetCount === undefined) {
      this._nameGetCount$ = new BehaviorSubject<number>(0);
    } else {
      this._nameGetCount$ = new BehaviorSubject<number>(params.nameGetCount);
    }
    this.nameGetCount$ = this._nameGetCount$.asObservable();
    if (params.createItemCount === undefined) {
      this._createItemCount$ = new BehaviorSubject<number>(0);
    } else {
      this._createItemCount$ = new BehaviorSubject<number>(
        params.createItemCount
      );
    }
    this.createItemCount$ = this._createItemCount$.asObservable();
  }

  private addNameGetCount() {
    this._nameGetCount$.next(this._nameGetCount$.value + 1);
  }

  addCreateItemCount() {
    this._createItemCount$.next(this._createItemCount$.value + 1);
  }

  clone() {
    return new PetModel({
      id: this.id,
      name: this.name,
      nameGetCount: this._nameGetCount$.value,
      createItemCount: this._createItemCount$.value,
    });
  }
}
