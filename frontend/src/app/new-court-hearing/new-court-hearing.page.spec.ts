import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCourtHearingPage } from './new-court-hearing.page';

describe('NewCourtHearingPage', () => {
  let component: NewCourtHearingPage;
  let fixture: ComponentFixture<NewCourtHearingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourtHearingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCourtHearingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
