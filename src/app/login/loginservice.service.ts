import { Injectable } from '@angular/core';
import { LoginClass } from './login.class';

@Injectable()
export class LoginserviceService {

  constructor() { }

  defaultLogins: LoginClass[] = [
  {
    userNameCheck: 'test',
    passwordCheck: 'check'
  },
  {
    userNameCheck: 'ash',
    passwordCheck: 'win'
  },
  {
    userNameCheck: 'test',
    passwordCheck: 'check'
  },
  {
    userNameCheck: 'test',
    passwordCheck: 'check'
  }
  ];

  getDefaultLogins(): LoginClass[] {
    return this.defaultLogins;
  }
}
