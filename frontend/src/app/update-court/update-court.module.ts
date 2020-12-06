import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCourtPageRoutingModule } from './update-court-routing.module';

import { UpdateCourtPage } from './update-court.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCourtPageRoutingModule
  ],
  declarations: [UpdateCourtPage]
})
export class UpdateCourtPageModule {}
