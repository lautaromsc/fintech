import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoPractico3Component } from './trabajo-practico3.component';

describe('TrabajoPractico3Component', () => {
  let component: TrabajoPractico3Component;
  let fixture: ComponentFixture<TrabajoPractico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoPractico3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoPractico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
