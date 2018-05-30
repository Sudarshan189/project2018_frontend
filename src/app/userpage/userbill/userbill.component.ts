import { Component, OnInit } from '@angular/core';
import {Bill, Signup} from "../../shared/classes/signup";
import {BillingService} from "../../services/billing.service";

@Component({
  selector: 'app-userbill',
  templateUrl: './userbill.component.html',
  styleUrls: ['./userbill.component.css']
})
export class UserbillComponent implements OnInit {
  constructor(private billingservice: BillingService) { }
  userdata: Signup;
  bills: Bill[];
  bill: Bill =new Bill();
  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem("userdata"));
    this.billingservice.GetBills(this.userdata.rr_num)
      .then(data => {
        this.bills = data;
        console.log(this.bills)
      })
      .catch(err => console.log(err));
  }
  OpenBill(item : Bill) {
    this.bill = new Bill();
    this.bill = item;
  }
}
