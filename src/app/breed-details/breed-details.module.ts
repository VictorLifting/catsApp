import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreedDetailsPage } from './breed-details.page';

import { IonicModule } from '@ionic/angular';

import { BreedDetailsPageRoutingModule } from './breed-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedDetailsPageRoutingModule
  ],
  declarations: [BreedDetailsPage]
})
export class BreedDetailsPageModule {}
