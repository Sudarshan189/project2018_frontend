import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeauthComponent } from './employeeauth.component';

describe('EmployeeauthComponent', () => {
  let component: EmployeeauthComponent;
  let fixture: ComponentFixture<EmployeeauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
