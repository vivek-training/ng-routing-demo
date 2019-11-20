import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Topic3Component } from './topic3.component';

describe('Topic3Component', () => {
  let component: Topic3Component;
  let fixture: ComponentFixture<Topic3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Topic3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Topic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
