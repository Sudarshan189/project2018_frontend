import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {StatusRespons} from "../../shared/classes/signup";
import {el} from "@angular/platform-browser/testing/browser_util";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stateMsg= new StatusRespons();
  error: any;
  constructor(private router: Router, private _auth: AuthService) {}
  ngOnInit() {
  }

  LoginForm(f: any) {
    this.error = 0;
    if (f.id == 0) {
      this.error = 1;
    } else {
      // console.log(f);
      this._auth.LoginService(f)
        .then(data => {
          this.stateMsg = data;
          if (this.stateMsg.state == 3) {
            localStorage.setItem("id", f.id);
            this.router.navigate(['/home'])
          } else {
            this.error = 1;
          }
        })
        .catch(err => console.log(err));
    }
  }
}
