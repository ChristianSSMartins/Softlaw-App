import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'my-court-hearing',
        loadChildren: () => import('../my-court-hearing/my-court-hearing.module').then(m => m.MyCourtHearingPageModule)
      },
      {
        path: 'new-court-hearing',
        loadChildren: () => import('../new-court-hearing/new-court-hearing.module').then(m => m.NewCourtHearingPageModule)
      },
      {
        path: '',
        redirectTo: '/home/my-court-hearing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/my-court-hearing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
