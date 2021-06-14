import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
