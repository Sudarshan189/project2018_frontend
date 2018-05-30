import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcontrolComponent } from './switchcontrol.component';

describe('SwitchcontrolComponent', () => {
  let component: SwitchcontrolComponent;
  let fixture: ComponentFixture<SwitchcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
