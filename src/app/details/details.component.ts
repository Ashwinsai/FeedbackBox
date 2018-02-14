import { Invention } from '../invention/invention.class';
import { InventionsService } from '../invention/inventions.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [InventionsService]
})
export class DetailsComponent implements OnInit {

  id: String;
  invention: Invention;

  constructor(private route: ActivatedRoute,
  private router: Router,
  private service: InventionsService) {
  }

  ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('id');
  this.invention = this.service.getInventionsById(+this.id);
}

  initialize() {
  }
}
