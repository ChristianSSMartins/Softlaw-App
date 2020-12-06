import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCourtPage } from './update-court.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCourtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCourtPageRoutingModule {}
