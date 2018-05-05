import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { Signup } from "../../shared/classes/signup";


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  userdata: Signup;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.userdata = new Signup();
    this._auth.GetUserdataService()
      .then(data => {
        // local storage
        localStorage.setItem("userdata",JSON.stringify(data));
        this.userdata = JSON.parse(localStorage.getItem("userdata"))
        if(this.userdata.id == 0) {
          this.router.navigate(["/login"])
        }
      })
      .catch(err=> console.log(err));
  }

}
