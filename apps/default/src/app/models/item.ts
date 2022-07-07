export interface ItemModel {
  id: string;
  code: string;
  description: string;
  items?: Array<ItemModel>;
}
