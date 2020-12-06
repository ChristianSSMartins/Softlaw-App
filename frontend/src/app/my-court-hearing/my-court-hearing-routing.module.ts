import { CourtHearingUpdatePage } from './court-hearing-update/court-hearing-update.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCourtHearingPage } from './my-court-hearing.page';

const routes: Routes = [
  {
    path: '',
    component: MyCourtHearingPage
  },
  {
    path: 'update/:id',
    component: CourtHearingUpdatePage
  },
  {
    path: 'update-court',
    loadChildren: () => import('../update-court/update-court.page').then( m => m.UpdateCourtPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCourtHearingPageRoutingModule {}
