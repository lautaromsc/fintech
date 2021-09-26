import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoPractico1Component } from './trabajo-practico1.component';

describe('TrabajoPractico1Component', () => {
  let component: TrabajoPractico1Component;
  let fixture: ComponentFixture<TrabajoPractico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoPractico1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoPractico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
