import { Router } from '@angular/router';
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
    lowyer: '',
    forum: '',
    adress: ''
  };

  constructor(private courtHearingService: CourtHearingsService, private router: Router) { }

  ngOnInit() {
  }

  createCourtHearing(): void {
    this.courtHearingService.create(this.courtHearing).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}

