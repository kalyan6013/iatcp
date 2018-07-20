import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoweryogaComponent } from './poweryoga.component';

describe('PoweryogaComponent', () => {
  let component: PoweryogaComponent;
  let fixture: ComponentFixture<PoweryogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoweryogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoweryogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
