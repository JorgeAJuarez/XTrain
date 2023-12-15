import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherScreenComponent } from './admin-teacher-screen.component';

describe('AdminTeacherScreenComponent', () => {
  let component: AdminTeacherScreenComponent;
  let fixture: ComponentFixture<AdminTeacherScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTeacherScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTeacherScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
