import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../userauth/login/login.component";
import {SignupComponent} from "../userauth/signup/signup.component";
import {UserhomeComponent} from "../userpage/userhome/userhome.component";
import {UserbillComponent} from "../userpage/userbill/userbill.component";
import {UserpricingComponent} from "../userpage/userpricing/userpricing.component";
import {EmployeeauthComponent} from "../employee/employeeauth/employeeauth.component";
import {EmployeehomeComponent} from "../employee/employeehome/employeehome.component";
import {SwitchcontrolComponent} from "../userpage/switchcontrol/switchcontrol.component";

const APPROUTS: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignupComponent },
  { path: 'home', component: UserhomeComponent },
  { path: 'bills', component: UserbillComponent },
  { path: 'chargesapplied', component: UserpricingComponent },
  { path: 'employeelogin', component:EmployeeauthComponent  },
  { path: 'employeehome', component: EmployeehomeComponent },
  { path: 'switchcontrol', component: SwitchcontrolComponent }
];

export const newRoute = RouterModule.forRoot(APPROUTS);
