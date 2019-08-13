import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFullComponent } from './admin-full.component';

describe('AdminFullComponent', () => {
  let component: AdminFullComponent;
  let fixture: ComponentFixture<AdminFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
