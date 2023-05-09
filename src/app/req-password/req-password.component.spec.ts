import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqPasswordComponent } from './req-password.component';

describe('ReqPasswordComponent', () => {
  let component: ReqPasswordComponent;
  let fixture: ComponentFixture<ReqPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
