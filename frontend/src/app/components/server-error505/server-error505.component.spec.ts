import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerError505Component } from './server-error505.component';

describe('ServerError505Component', () => {
  let component: ServerError505Component;
  let fixture: ComponentFixture<ServerError505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerError505Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerError505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
