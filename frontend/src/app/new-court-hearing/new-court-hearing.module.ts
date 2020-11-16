import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCourtHearingPageRoutingModule } from './new-court-hearing-routing.module';

import { NewCourtHearingPage } from './new-court-hearing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCourtHearingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewCourtHearingPage]
})
export class NewCourtHearingPageModule {}
