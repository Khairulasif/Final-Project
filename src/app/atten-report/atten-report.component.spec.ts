import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenReportComponent } from './atten-report.component';

describe('AttenReportComponent', () => {
  let component: AttenReportComponent;
  let fixture: ComponentFixture<AttenReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttenReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
