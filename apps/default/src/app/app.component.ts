import { Component } from '@angular/core';
import { ItemModel } from './models/item';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: Array<ItemModel>;

  constructor(private dataService: DataService) {
    this.data = this.dataService.data;
  }
}
