import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CourtHearing } from '../models/courtHearing.model';
import { CourtHearingsService } from '../services/courtHearings/court-hearings.service';
import { ExitPage } from './../modal/exit/exit.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-court',
  templateUrl: './update-court.page.html',
  styleUrls: ['./update-court.page.scss'],
})
export class UpdateCourtPage implements OnInit {

  courtHearing: CourtHearing;
  num;
  adress;
  date;
  lawyer;
  time;
  forum;

  constructor(private router: Router, private courtHearingsService: CourtHearingsService, private modalController: ModalController,
              private alertController: AlertController) {
    const id = this.router.getCurrentNavigation().extras.state.id;
    this.courtHearingsService.readById(id).subscribe(courtHearing => {
      this.courtHearing = courtHearing;
      this.num = this.courtHearing.num;
      this.date = this.courtHearing.date;
      this.lawyer = this.courtHearing.lawyer;
      this.time = this.courtHearing.time;
      this.forum = this.courtHearing.forum;
      this.adress = this.courtHearing.adress;
    });
  }

  ngOnInit() {
  }

  updateCourtHearing(): void {
    this.courtHearing.num  = this.num;
    this.courtHearing.date = this.date;
    this.courtHearing.lawyer = this.lawyer;
    this.courtHearing.time = this.time;
    this.courtHearing.forum = this.forum;
    this.courtHearingsService.update(this.courtHearing).subscribe(() => {
      this.router.navigate(['/home']);
      this.updateAlert();
    });
  }

  async updateAlert() {
    const alert = await this.alertController.create({
      header: 'Atualizado!',
      message: `Recarregue a página para verificar a atualização.`,
      buttons: ['OK']
    });
    await alert.present();
  }

  backPage() {
    this.router.navigate(['/home']);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ExitPage,
    });
    return await modal.present();
  }

}
