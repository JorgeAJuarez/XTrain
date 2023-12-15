import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTechnicScreenComponent } from './admin-technic-screen.component';

describe('AdminTechnicScreenComponent', () => {
  let component: AdminTechnicScreenComponent;
  let fixture: ComponentFixture<AdminTechnicScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTechnicScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTechnicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
