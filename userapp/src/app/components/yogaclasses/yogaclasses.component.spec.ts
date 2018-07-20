import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaclassesComponent } from './yogaclasses.component';

describe('YogaclassesComponent', () => {
  let component: YogaclassesComponent;
  let fixture: ComponentFixture<YogaclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
