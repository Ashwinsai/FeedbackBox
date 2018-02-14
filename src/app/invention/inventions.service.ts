import { Injectable } from '@angular/core';

import { Invention } from './invention.class';

@Injectable()
export class InventionsService {

  rawInventions: Invention[] = [
     {
    name : 'Java',
    inventor : 'James Ghosling',
    year : '1995',
    id: 1,
    details: 'Java is a programming language'
  } ,
  {
    name : 'Python',
    inventor : 'Guido van Rosum',
    year: '1991',
    id: 2,
    details: 'Python is a programming & scripting language'
  } ,
  {
    name : 'C++',
    inventor : 'Bjarne Stroustrup',
    year : '1983',
    id: 3,
    details: 'C++ is heavily used in gaming'
  }];

  constructor() { }

  getInventions(): Invention[] {
  return this.rawInventions;
  }

  getInventionsById( id ): Invention {
    for (let i = 0; i < this.rawInventions.length; i++) {
      if (id === this.rawInventions[i].id) {
        return this.rawInventions[i];
      }
    }
    return null;
  }

}
