import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManageComponent } from './hr-manage.component';

describe('HrManageComponent', () => {
  let component: HrManageComponent;
  let fixture: ComponentFixture<HrManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
