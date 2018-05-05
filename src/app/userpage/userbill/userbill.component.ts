import { Component, OnInit } from '@angular/core';
import {Signup} from "../../shared/classes/signup";

@Component({
  selector: 'app-userbill',
  templateUrl: './userbill.component.html',
  styleUrls: ['./userbill.component.css']
})
export class UserbillComponent implements OnInit {

  constructor() { }
  userdata: Signup;
  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem("userdata"));
  }

}
