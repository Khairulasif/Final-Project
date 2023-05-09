import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenReport2Component } from './atten-report2.component';

describe('AttenReport2Component', () => {
  let component: AttenReport2Component;
  let fixture: ComponentFixture<AttenReport2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenReport2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttenReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
