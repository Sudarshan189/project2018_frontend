import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import {KWHUpdate, Signup} from "../../shared/classes/signup";
import {BillingService} from "../../services/billing.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/timer";


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  userdata: Signup;
  meterdata: KWHUpdate;

  constructor(private _auth: AuthService, private router: Router, private billingservice: BillingService) { }

  ngOnInit() {
    this.userdata = new Signup();
    this.userdata = JSON.parse(localStorage.getItem("userdata"));
    this._auth.GetUserdataService()
      .then(data => {
        // local storage
        localStorage.setItem("userdata",JSON.stringify(data));
        this.userdata = JSON.parse(localStorage.getItem("userdata"));
        if(this.userdata.id == 0) {
          this.router.navigate(["/login"])
        }
        // meter data update
        this.meterdata = new KWHUpdate();
        this.billingservice.GetMeterData(this.userdata.rr_num)
          .then(data=> {
            this.meterdata = data;
          })
          .catch(err => console.log(err));

      })
      .catch(err=> console.log(err));

    this.meterdata = new KWHUpdate();
    this.billingservice.GetMeterData(this.userdata.rr_num)
      .then(data=> {
        this.meterdata = data;
      })
      .catch(err => console.log(err));

  }
  UpdateMeterData() {
    this.meterdata = new KWHUpdate();
    this.billingservice.GetMeterData(this.userdata.rr_num)
      .then(data=> {
        this.meterdata = data;
      })
      .catch(err => console.log(err));
  }
}
