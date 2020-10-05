import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCourtHearingPage } from './my-court-hearing.page';

describe('MyCourtHearingPage', () => {
  let component: MyCourtHearingPage;
  let fixture: ComponentFixture<MyCourtHearingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourtHearingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCourtHearingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
