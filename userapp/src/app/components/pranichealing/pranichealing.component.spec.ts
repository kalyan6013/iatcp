import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PranichealingComponent } from './pranichealing.component';

describe('PranichealingComponent', () => {
  let component: PranichealingComponent;
  let fixture: ComponentFixture<PranichealingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranichealingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranichealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
