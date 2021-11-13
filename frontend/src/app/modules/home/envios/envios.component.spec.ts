import { ComponentFixture, TestBed } from '@angular/core/testing';

import { enviosComponent } from './envios.component';

describe('enviosComponent', () => {
  let component: enviosComponent;
  let fixture: ComponentFixture<enviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ enviosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(enviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
