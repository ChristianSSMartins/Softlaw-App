import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCourtHearingPageRoutingModule } from './my-court-hearing-routing.module';

import { MyCourtHearingPage } from './my-court-hearing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCourtHearingPageRoutingModule,
  ],
  declarations: [MyCourtHearingPage]
})
export class MyCourtHearingPageModule {}
