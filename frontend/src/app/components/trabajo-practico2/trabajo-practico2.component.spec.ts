import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoPractico2Component } from './trabajo-practico2.component';

describe('TrabajoPractico2Component', () => {
  let component: TrabajoPractico2Component;
  let fixture: ComponentFixture<TrabajoPractico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoPractico2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoPractico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
