import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employeeauth',
  templateUrl: './employeeauth.component.html',
  styleUrls: ['./employeeauth.component.css']
})
export class EmployeeauthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  EmployeeLogin(f) {
   console.log(f) ;
   if(f.account_id == "13069" && f.password == "admin") {
     this.router.navigate(["/employeehome"]);
   }
  }


}
