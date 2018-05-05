import { Component, OnInit } from '@angular/core';
import {Signup} from "../classes/signup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userdata;
  constructor(private router: Router) { }

  ngOnInit() {
    this.userdata = new Signup();
    this.userdata = JSON.parse(localStorage.getItem("userdata"));
  }



  Logout() {
    // localStorage.removeItem("userdata");
    this.router.navigate(["./login"]);
  }

}
