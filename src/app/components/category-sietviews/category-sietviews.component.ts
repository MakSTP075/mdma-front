import { Component, OnInit } from '@angular/core';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-category-sietviews',
  templateUrl: './category-sietviews.component.html',
  styleUrls: ['./category-sietviews.component.css']
})
export class CategorySietviewsComponent implements OnInit {

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

