import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiciplineComponent } from './dicipline.component';

describe('DiciplineComponent', () => {
  let component: DiciplineComponent;
  let fixture: ComponentFixture<DiciplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiciplineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
