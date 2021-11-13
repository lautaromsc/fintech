import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shipiFiComponent } from './shipiFi.component';

describe('shipiFiComponent', () => {
  let component: shipiFiComponent;
  let fixture: ComponentFixture<shipiFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [shipiFiComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(shipiFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
