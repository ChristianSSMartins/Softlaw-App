import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtHearingUpdatePageRoutingModule } from './court-hearing-update-routing.module';

import { CourtHearingUpdatePage } from './court-hearing-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtHearingUpdatePageRoutingModule
  ],
  declarations: [CourtHearingUpdatePage]
})
export class CourtHearingUpdatePageModule {}
