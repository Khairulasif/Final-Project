import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstallmentListComponent } from './edit-installment-list.component';

describe('EditInstallmentListComponent', () => {
  let component: EditInstallmentListComponent;
  let fixture: ComponentFixture<EditInstallmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstallmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstallmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
