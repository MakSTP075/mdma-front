import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];
  constructor(private ss: StateServiceService) { }

  ngOnInit(): void {
    this.ss.restaurants$.subscribe(value => {
      this.restaurants = value

    })

  }
  selectRestaurant(index: number){
       this.ss.setRestaurant(this.restaurants[index])
       
      }


}
