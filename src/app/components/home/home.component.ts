import { Component, OnInit } from '@angular/core';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
