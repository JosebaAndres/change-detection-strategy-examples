import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  declarations: [AppComponent, ItemComponent, ItemsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
