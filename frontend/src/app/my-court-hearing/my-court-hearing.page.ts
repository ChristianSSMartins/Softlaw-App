import { Router } from '@angular/router';
import { CourtHearingsService } from './../services/courtHearings/court-hearings.service';
import { Component, OnInit } from '@angular/core';
import { CourtHearing } from '../models/courtHearing.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-court-hearing',
  templateUrl: './my-court-hearing.page.html',
  styleUrls: ['./my-court-hearing.page.scss'],
})
export class MyCourtHearingPage implements OnInit {

  courtHearings: CourtHearing[];
  courtHearing: CourtHearing;

  constructor(private courtHearingsService: CourtHearingsService, private router: Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.courtHearingsService.read().subscribe(courtHearings => {
      this.courtHearings = courtHearings;
      console.log(courtHearings);
    });
  }

  ionViewWillEnter() {
    this.ngOnInit();
}

  async deleteAlert() {
    const alert = await this.alertController.create({
      header: 'Excluido',
      message: `Audiência excluida com sucesso!`,
      buttons: ['OK']
    });
    await alert.present();
  }

  deleteCourtHearing(id): void {
    this.courtHearingsService.delete(id).subscribe(courtHearing => {
      this.courtHearing = courtHearing;
      setTimeout(() => {
        this.ngOnInit();
      }, 1000);
      this.deleteAlert();
    });
  }

  refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }

}
