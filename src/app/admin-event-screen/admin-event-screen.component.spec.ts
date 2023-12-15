import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventScreenComponent } from './admin-event-screen.component';

describe('AdminEventScreenComponent', () => {
  let component: AdminEventScreenComponent;
  let fixture: ComponentFixture<AdminEventScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
