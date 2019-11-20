import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivyComponent } from './privy.component';

describe('PrivyComponent', () => {
  let component: PrivyComponent;
  let fixture: ComponentFixture<PrivyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
