import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCourtHearingPage } from './new-court-hearing.page';

const routes: Routes = [
  {
    path: '',
    component: NewCourtHearingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCourtHearingPageRoutingModule {}
