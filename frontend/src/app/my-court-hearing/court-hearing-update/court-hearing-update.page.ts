import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourtHearing } from 'src/app/models/courtHearing.model';
import { CourtHearingsService } from 'src/app/services/courtHearings/court-hearings.service';

@Component({
  selector: 'app-court-hearing-update',
  templateUrl: './court-hearing-update.page.html',
  styleUrls: ['./court-hearing-update.page.scss'],
})
export class CourtHearingUpdatePage implements OnInit {

  courtHearing: CourtHearing;

  constructor(private router: Router, private courtHearingsService: CourtHearingsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.courtHearingsService.readById(id).subscribe(courtHearing => {
      this.courtHearing = courtHearing;
      console.log(courtHearing);
    });
  }

  updateCourtHearing(): void {
    this.courtHearingsService.update(this.courtHearing).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  backPage() {
    this.router.navigate(['/home']);
  }

}
