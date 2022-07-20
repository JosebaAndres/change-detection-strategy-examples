import { BehaviorSubject } from 'rxjs';
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
  // componentConstructionCount$ = new BehaviorSubject<number>(0);
  private _nameGetCount$ = new BehaviorSubject<number>(0);
  nameGetCount$ = this._nameGetCount$.asObservable();

  constructor(params: { id: number; name: string }) {
    this.id = params.id;
    this.name = params.name;
  }

  private addNameGetCount() {
    this._nameGetCount$.next(this._nameGetCount$.value + 1);
  }

  // addComponentConstructionCount() {
  //   this.componentConstructionCount$.next(
  //     this.componentConstructionCount$.value + 1
  //   );
  // }
}
