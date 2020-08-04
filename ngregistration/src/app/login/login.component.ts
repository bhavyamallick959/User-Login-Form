import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user = new User();
   msg = '';

  constructor(private _service : RegistrationService, private _route : Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Recieved");
        this._route.navigate(['/loginsuccess'])
      },
      error => {
        console.log("Exception Occured");
        this.msg = "Bad Credentials, please enter a valid emailId and password!";
      }
    )
  }

  gotoregistration() {
    this._route.navigate(['/registration']);
  }

}
