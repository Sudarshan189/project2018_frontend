import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './userauth/login/login.component';
import { SignupComponent } from './userauth/signup/signup.component';
import { UserhomeComponent } from './userpage/userhome/userhome.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserpricingComponent } from './userpage/userpricing/userpricing.component';
import { UserbillComponent } from './userpage/userbill/userbill.component';
import { newRoute } from './routing/navroute'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    NavbarComponent,
    UserpricingComponent,
    UserbillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    newRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
