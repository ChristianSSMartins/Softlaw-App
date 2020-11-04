import { ActivatedRoute, Router } from '@angular/router';
import { CourtHearing } from './../models/courtHearing.model';
import { CourtHearingsService } from './../services/courtHearings/court-hearings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-court-hearing',
  templateUrl: './new-court-hearing.page.html',
  styleUrls: ['./new-court-hearing.page.scss'],
})
export class NewCourtHearingPage implements OnInit {

  courtHearing: CourtHearing = {
    num: null,
    date: '',
    time: '',
    lawyer: '',
    forum: '',
    adress: ''
  };

  constructor(private courtHearingService: CourtHearingsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.courtHearingService.readById(id).subscribe(courtHearing => {
    //   this.courtHearing = courtHearing;
    // });
  }

  ionViewWillLeave() {
    this.courtHearing.num = null;
    this.courtHearing.date = null;
    this.courtHearing.time = null;
    this.courtHearing.lawyer = null;
    this.courtHearing.forum = null;
    this.courtHearing.adress = null;
    document.getElementById('date').setAttribute('type', 'text');
    document.getElementById('time').setAttribute('type', 'text');
  }

  // updateCourtHearing(): void { }

  // cancel(): void {
  //   this.router.navigate(['/home']);
  // }

  createCourtHearing(): void {
    this.courtHearingService.create(this.courtHearing).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}

