import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { LoginClass } from './login.class';

declare var $:any;
let $ = require('jquery');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService]
})
export class LoginComponent implements OnInit {

  userName: String;
  password: String;
  loginDefaults: LoginClass[];

  constructor( private loginService: LoginserviceService) {
  this.userName = '';
  this.password = '';
  this.loginDefaults = loginService.getDefaultLogins();
    $('#loginErrMsg').css('display', 'none');
  }

  ngOnInit() {
  }

  verifyUserLogin(): String {
  console.log('inside verify method');
  if (this.userName === '' || this.password === '') {
    $('#loginErrMsg').css('display', 'block');
    return null;
  }


  for (let i = 0; i < this.loginDefaults.length; i++)
  {
    if (this.loginDefaults[i] != null && this.loginDefaults[i].userNameCheck === this.userName && this.loginDefaults[i].passwordCheck === this.password)
    {
      alert('Login successful');
      return 'Login successful';
    }
  }

  $('#loginErrMsg').css('display', 'block');
  }
}
