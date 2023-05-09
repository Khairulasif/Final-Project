import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplComponent } from './leave-appl.component';

describe('LeaveApplComponent', () => {
  let component: LeaveApplComponent;
  let fixture: ComponentFixture<LeaveApplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveApplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveApplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
