import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtHearingUpdatePage } from './court-hearing-update.page';

const routes: Routes = [
  {
    path: '',
    component: CourtHearingUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtHearingUpdatePageRoutingModule {}
