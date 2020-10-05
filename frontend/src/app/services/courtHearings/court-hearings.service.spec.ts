import { TestBed } from '@angular/core/testing';

import { CourtHearingsService } from './court-hearings.service';

describe('CourtHearingsService', () => {
  let service: CourtHearingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtHearingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
