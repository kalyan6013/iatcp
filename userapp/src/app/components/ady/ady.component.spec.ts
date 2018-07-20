import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdyComponent } from './ady.component';

describe('AdyComponent', () => {
  let component: AdyComponent;
  let fixture: ComponentFixture<AdyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
