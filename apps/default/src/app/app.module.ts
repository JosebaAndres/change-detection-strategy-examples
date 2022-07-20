import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PetComponent } from './components/pet/pet.component';
import { PetsComponent } from './components/pets/pets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextComponent } from './components/context/context.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, PetComponent, PetsComponent, ContextComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
