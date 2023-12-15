import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTrainComponent } from './daily-train.component';

describe('DailyTrainComponent', () => {
  let component: DailyTrainComponent;
  let fixture: ComponentFixture<DailyTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
