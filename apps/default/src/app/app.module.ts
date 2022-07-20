import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PetListItemComponent } from './components/pet-list-item/pet-list-item.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextComponent } from './components/context/context.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PetListItemComponent,
    PetListComponent,
    ContextComponent,
  ],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
