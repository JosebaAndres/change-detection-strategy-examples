import { BehaviorSubject } from 'rxjs';

export class ItemModel {
  id: string;
  code: string;
  private _description = '';
  get description(): string {
    this.addDescriptionGetCount();
    return this._description;
  }
  set description(value: string) {
    this._description = value;
  }
  componentConstructionCount$ = new BehaviorSubject<number>(0);
  descriptionGetCount$ = new BehaviorSubject<number>(0);
  items?: Array<ItemModel>;

  constructor(params: {
    id: string;
    code: string;
    description: string;
    items?: Array<ItemModel>;
  }) {
    this.id = params.id;
    this.code = params.code;
    this.description = params.description;
    this.items = params.items;
  }

  addDescriptionGetCount() {
    this.descriptionGetCount$.next(this.descriptionGetCount$.value + 1);
  }

  addComponentConstructionCount() {
    this.componentConstructionCount$.next(
      this.componentConstructionCount$.value + 1
    );
  }
}
