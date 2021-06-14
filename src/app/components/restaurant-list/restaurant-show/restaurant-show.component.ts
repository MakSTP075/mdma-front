import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coment } from 'src/app/models/coment';
import { Restaurant } from 'src/app/models/restaurant';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css']
})
export class RestaurantShowComponent implements OnInit {
restaurant: Restaurant = {}
coments: Coment[] = []
edited: boolean = false
form: FormGroup
constructor(private ss: StateServiceService, private formBuilder: FormBuilder ) {
  this.form = this.formBuilder.group({
    details: [{value: null}]

  })
}
  ngOnInit(): void {
    this.ss.restaurant$.subscribe(value => {
      this.restaurant = value
      this.form.patchValue(this.restaurant)
    } )
    this.ss.coments$.subscribe(value => {
      this.coments = value
    })
    this.form.controls["details"].valueChanges.subscribe(arg => this.edited = true);
  }
  saveChanges(){
    this.restaurant.details = this.form.controls["details"].value
    this.ss.updateSiteview(this.restaurant).subscribe(value => {
      this.ss.getSiteviewById(value.id).subscribe(x => {
        this.ss.setSietview(value)
        this.edited = false
      })
    })
  }
  onDelete(){
    this.ss.deleteRestaurant(this.restaurant.id!).subscribe(value =>{
        this.ss.setRestaurant(value)
    })
  }
}
