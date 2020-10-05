import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCourtHearingPageRoutingModule } from './new-court-hearing-routing.module';

import { NewCourtHearingPage } from './new-court-hearing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCourtHearingPageRoutingModule
  ],
  declarations: [NewCourtHearingPage]
})
export class NewCourtHearingPageModule {}
