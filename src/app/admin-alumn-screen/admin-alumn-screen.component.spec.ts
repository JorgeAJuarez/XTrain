import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlumnScreenComponent } from './admin-alumn-screen.component';

describe('AdminAlumnScreenComponent', () => {
  let component: AdminAlumnScreenComponent;
  let fixture: ComponentFixture<AdminAlumnScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAlumnScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAlumnScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
