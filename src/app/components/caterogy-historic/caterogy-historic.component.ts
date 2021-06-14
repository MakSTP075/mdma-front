import { Component, OnInit } from '@angular/core';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-caterogy-historic',
  templateUrl: './caterogy-historic.component.html',
  styleUrls: ['./caterogy-historic.component.css']
})
export class CaterogyHistoricComponent implements OnInit {

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
