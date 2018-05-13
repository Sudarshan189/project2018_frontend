import { Component, OnInit } from '@angular/core';
import {Signup} from "../classes/signup";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userdata: Signup  = new Signup();
  constructor(private router: Router, private _auth: AuthService) { }

  ngOnInit() {
    this.userdata = new Signup();
    this._auth.GetUserdataService()
      .then(data => {
        // local storage
        localStorage.setItem("userdata",JSON.stringify(data));
        this.userdata = JSON.parse(localStorage.getItem("userdata"));
        if(this.userdata.id == 0) {
          this.router.navigate(["/login"])
        }
      })
      .catch(err=> console.log(err));



   // this.userdata = JSON.parse(localStorage.getItem("userdata"));
  }



  Logout() {
    // localStorage.removeItem("userdata");
    this.router.navigate(["./login"]);

  }

}
