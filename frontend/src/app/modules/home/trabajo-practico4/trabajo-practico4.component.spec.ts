import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoPractico4Component } from './trabajo-practico4.component';

describe('TrabajoPractico4Component', () => {
  let component: TrabajoPractico4Component;
  let fixture: ComponentFixture<TrabajoPractico4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoPractico4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoPractico4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
