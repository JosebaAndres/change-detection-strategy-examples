import { Injectable } from '@angular/core';
import { ItemModel } from '../models/item';

@Injectable({ providedIn: 'root' })
export class DataService {
  data: Array<ItemModel> = [
    new ItemModel({
      id: '1',
      code: 'Cod. 1',
      description: 'Item 1',
      items: [
        new ItemModel({
          id: '1.1',
          code: 'Cod. 1.1',
          description: 'Item 1.1',
        }),
        new ItemModel({
          id: '1.2',
          code: 'Cod. 1.2',
          description: 'Item 1.2',
        }),
      ],
    }),
    new ItemModel({
      id: '2',
      code: 'Cod. 2',
      description: 'Item 2',
      items: [
        new ItemModel({
          id: '2.1',
          code: 'Cod. 2.1',
          description: 'Item 2.1',
        }),
        new ItemModel({
          id: '2.2',
          code: 'Cod. 2.2',
          description: 'Item 2.2',
          items: [
            new ItemModel({
              id: '2.2.1',
              code: 'Cod. 2.2.1',
              description: 'Item 2.2.1',
            }),
            new ItemModel({
              id: '2.2.2',
              code: 'Cod. 2.2.2',
              description: 'Item 2.2.2',
            }),
          ],
        }),
      ],
    }),
  ];
}
