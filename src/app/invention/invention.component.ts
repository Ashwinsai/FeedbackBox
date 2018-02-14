import { Invention } from './invention.class';
import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { InventionsService } from './inventions.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invention',
  templateUrl: './invention.component.html',
  styleUrls: ['./invention.component.css'],
  providers: [ InventionsService]
})
export class InventionComponent implements OnInit {

  nameModel: String;
  inventorModel: String;
  yearModel: String;
  detailModel: String;
  inventions: Invention[];
  totalInventions: number;


   constructor( private inventionsService: InventionsService,
   private router: Router) {
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
    this.detailModel = '';

    this.inventions = inventionsService.getInventions();
    this.totalInventions = this.inventions.length;
   }

  ngOnInit() {
  }

  createInvention() {

    this.totalInventions += 1;
    let newInvention: Invention = {
      id: this.getId(),
      name: this.nameModel,
      inventor: this.inventorModel,
      year: this.yearModel,
      details: this.detailModel
    };

    if (newInvention.name === '' || newInvention.inventor === '' || newInvention.year === '') {
      // do nothing
      return;
    }
    this.inventions.push(newInvention);
    this.nameModel = this.inventorModel = this.yearModel = '';
  }

  details( id ) {
     this.router.navigate(['/details' , id ]);
  }

   login() {
     this.router.navigate(['/login']);
  }

  getId() {
    return this.totalInventions + 1;
  }
}
