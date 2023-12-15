import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainScreenComponent } from './admin-train-screen.component';

describe('AdminTrainScreenComponent', () => {
  let component: AdminTrainScreenComponent;
  let fixture: ComponentFixture<AdminTrainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTrainScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTrainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
