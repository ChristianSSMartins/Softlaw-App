import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCourtHearingPage } from './my-court-hearing.page';

const routes: Routes = [
  {
    path: '',
    component: MyCourtHearingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCourtHearingPageRoutingModule {}
