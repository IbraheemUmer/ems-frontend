import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnceagainComponent } from './onceagain.component';

describe('OnceagainComponent', () => {
  let component: OnceagainComponent;
  let fixture: ComponentFixture<OnceagainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnceagainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnceagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
