import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {StatusRespons} from "../../shared/classes/signup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  stateMsg = new StatusRespons();
  error: any;
  constructor(private _auth: AuthService) { }

  ngOnInit() {

  }

  SignUp(f: any) {
    this.error=0;
    if (f.id == 0) {
      this.error = 1;
    } else {
      this._auth.SignUpService(f)
        .then(data => {
          this.stateMsg = data;
          if (this.stateMsg.state != 1) {
            this.error = 1;
          }
        })
        .catch(err => console.log(err));
    }
  }

}
