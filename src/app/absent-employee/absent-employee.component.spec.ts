import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentEmployeeComponent } from './absent-employee.component';

describe('AbsentEmployeeComponent', () => {
  let component: AbsentEmployeeComponent;
  let fixture: ComponentFixture<AbsentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
