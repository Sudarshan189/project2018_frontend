import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpricingComponent } from './userpricing.component';

describe('UserpricingComponent', () => {
  let component: UserpricingComponent;
  let fixture: ComponentFixture<UserpricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
