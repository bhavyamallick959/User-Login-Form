import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
   msgs = '';

  constructor(private _service : RegistrationService, private _route : Router) { }


  ngOnInit(): void {
  }

  registrationUser() {
    this._service.registrationUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response Recieved");
        this._route.navigate(['/login']);
      },
      error => {
        console.log("Exception Occured");
        this.msgs = "Password and Confirm Password must be same";
      }
    )
  }

}
