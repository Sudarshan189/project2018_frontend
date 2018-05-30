import { Component, OnInit } from '@angular/core';
import {UserpricingComponent} from "../userpricing/userpricing.component";
import {Signup, Switch} from "../../shared/classes/signup";
import {SwitchService} from "../../services/switch.service";

@Component({
  selector: 'app-switchcontrol',
  templateUrl: './switchcontrol.component.html',
  styleUrls: ['./switchcontrol.component.css']
})
export class SwitchcontrolComponent implements OnInit {

  userdata: Signup;

  switches : Switch[];

  constructor(private _switch: SwitchService) { }

  // this.userdata = JSON.parse(localStorage.getItem("userdata"));

  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem("userdata"));
    // console.log(this.userdata)
    this._switch.GetSwitchStatus(this.userdata.rr_num)
      .then(data => {
        this.switches = data;
      })
      .catch(err => console.log(err));
  }


  SwitchOn(i: Switch) {
    this.switches = [];
    this._switch.ClickSwitch(i.rr_num, i.socket_id, '1')
      .then(data => {
        this.switches = data;
      })
      .catch(err => console.log(err));
  }



  SwitchOff(i: Switch) {
    this.switches = [];
    this._switch.ClickSwitch(i.rr_num, i.socket_id, '0')
      .then(data => {
        this.switches = data;
      })
      .catch(err => console.log(err));
  }

}
