import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp4Component } from './tp4.component';

describe('Tp4Component', () => {
  let component: Tp4Component;
  let fixture: ComponentFixture<Tp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
