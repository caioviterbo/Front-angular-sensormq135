import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSensorComponent } from './dados-sensor.component';

describe('DadosSensorComponent', () => {
  let component: DadosSensorComponent;
  let fixture: ComponentFixture<DadosSensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosSensorComponent]
    });
    fixture = TestBed.createComponent(DadosSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
