import { Component, OnInit } from '@angular/core';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private ss: StateServiceService) { }

  ngOnInit(): void {
    this.ss.getRestaurant();
    this.ss.getHistorics();
    this.ss.getSiteviews();
  }
   login(){

   }
   signIn(){

   }

}
