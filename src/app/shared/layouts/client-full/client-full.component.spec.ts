import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFullComponent } from './client-full.component';

describe('ClientFullComponent', () => {
  let component: ClientFullComponent;
  let fixture: ComponentFixture<ClientFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
