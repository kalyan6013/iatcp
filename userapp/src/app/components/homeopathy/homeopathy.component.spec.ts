import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeopathyComponent } from './homeopathy.component';

describe('HomeopathyComponent', () => {
  let component: HomeopathyComponent;
  let fixture: ComponentFixture<HomeopathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeopathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
