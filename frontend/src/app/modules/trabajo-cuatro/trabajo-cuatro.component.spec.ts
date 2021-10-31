import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoCuatroComponent } from './trabajo-cuatro.component';

describe('TrabajoCuatroComponent', () => {
  let component: TrabajoCuatroComponent;
  let fixture: ComponentFixture<TrabajoCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoCuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
