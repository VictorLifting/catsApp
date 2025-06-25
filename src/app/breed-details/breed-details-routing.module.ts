import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedDetailsPage } from './breed-details.page';

const routes: Routes = [
  {
    path: '',
    component: BreedDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedDetailsPageRoutingModule {}
