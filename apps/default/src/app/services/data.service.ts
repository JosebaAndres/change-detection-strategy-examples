import { Injectable } from '@angular/core';
import { ItemModel } from '../models/item';

@Injectable({ providedIn: 'root' })
export class DataService {
  data: Array<ItemModel> = [
    {
      id: '1',
      description: 'Item 1',
      items: [
        { id: '1.1', description: 'Item 1.1' },
        { id: '1.2', description: 'Item 1.2' },
      ],
    },
    {
      id: '2',
      description: 'Item 2',
      items: [
        { id: '2.1', description: 'Item 2.1' },
        {
          id: '2.2',
          description: 'Item 2.2',
          items: [
            { id: '2.2.1', description: 'Item 2.2.1' },
            { id: '2.2.2', description: 'Item 2.2.2' },
          ],
        },
      ],
    },
  ];
}
