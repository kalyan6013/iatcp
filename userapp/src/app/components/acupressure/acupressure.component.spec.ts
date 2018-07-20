import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupressureComponent } from './acupressure.component';

describe('AcupressureComponent', () => {
  let component: AcupressureComponent;
  let fixture: ComponentFixture<AcupressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
