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
    path: 'court-hearing-update',
    loadChildren: () => import('./court-hearing-update/court-hearing-update.page').then( m => m.CourtHearingUpdatePage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCourtHearingPageRoutingModule {}
