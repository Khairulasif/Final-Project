import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenListComponent } from './atten-list.component';

describe('AttenListComponent', () => {
  let component: AttenListComponent;
  let fixture: ComponentFixture<AttenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
