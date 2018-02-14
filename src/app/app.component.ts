import { Component } from '@angular/core';

import {InventionComponent} from './invention/invention.component';
import { InventionsService } from './invention/inventions.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'app';

  constructor( private inventionsService: InventionsService,
   private router: Router) {
  }

   login() {
     this.router.navigate(['/login']);
  }

  register() {
     this.router.navigate(['/login']);
  }
   }


