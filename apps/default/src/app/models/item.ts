export interface ItemModel {
  id: string;
  description: string;
  items?: Array<ItemModel>;
}
