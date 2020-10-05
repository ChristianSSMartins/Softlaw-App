import { CourtHearingsService } from './../services/courtHearings/court-hearings.service';
import { Component, OnInit } from '@angular/core';
import { CourtHearing } from '../models/courtHearing.model';

@Component({
  selector: 'app-my-court-hearing',
  templateUrl: './my-court-hearing.page.html',
  styleUrls: ['./my-court-hearing.page.scss'],
})
export class MyCourtHearingPage implements OnInit {

  courtHearings: CourtHearing[];

  constructor(private courtHearingsService: CourtHearingsService) { }

  ngOnInit(): void {
    this.courtHearingsService.read().subscribe(courtHearings => {
      this.courtHearings = courtHearings;
      console.log(courtHearings);
    });
  }

  refresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.ngOnInit();
    }, 1000);
  }

}
