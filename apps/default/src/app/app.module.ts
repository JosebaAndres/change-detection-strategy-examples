import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PetListItemComponent } from './components/pet-list-item/pet-list-item.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextComponent } from './components/context/context.component';
import { PetsComponent } from './components/pets/pets.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UpdatePetComponent } from './components/update-pet/update-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextComponent,
    PetsComponent,
    PetListComponent,
    PetListItemComponent,
    CreatePetComponent,
    UpdatePetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
