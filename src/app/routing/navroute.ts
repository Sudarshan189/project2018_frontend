import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../userauth/login/login.component";
import {SignupComponent} from "../userauth/signup/signup.component";
import {UserhomeComponent} from "../userpage/userhome/userhome.component";
import {UserbillComponent} from "../userpage/userbill/userbill.component";
import {UserpricingComponent} from "../userpage/userpricing/userpricing.component";

const APPROUTS: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignupComponent },
  { path: 'home', component: UserhomeComponent },
  { path: 'bills', component: UserbillComponent },
  { path: 'chargesapplied', component: UserpricingComponent },
];

export const newRoute = RouterModule.forRoot(APPROUTS);
