import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticeScreenComponent } from './admin-notice-screen.component';

describe('AdminNoticeScreenComponent', () => {
  let component: AdminNoticeScreenComponent;
  let fixture: ComponentFixture<AdminNoticeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNoticeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNoticeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
