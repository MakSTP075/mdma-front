import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coment } from 'src/app/models/coment';
import { Historic } from 'src/app/models/historic';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-historic-show',
  templateUrl: './historic-show.component.html',
  styleUrls: ['./historic-show.component.css']
})
export class HistoricShowComponent implements OnInit {
  historic: Historic = {}
  coment: Coment[] = []
  form: FormGroup
edited: boolean = false
  constructor(private ss: StateServiceService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      details: [{value: null}]
    })
  }

  ngOnInit(): void {
    this.ss.historic$.subscribe(value => {
      this.historic = value
      this.form.patchValue(this.historic)
    })
    this.ss.coments$.subscribe(x => {
      this.coment = x
    })
    this.form.controls["details"].valueChanges.subscribe(arg => this.edited = true);
  }

  saveChanges(){
    this.historic.details = this.form.controls["details"].value
    this.ss.updateHistoric(this.historic).subscribe(value => {
      this.ss.getHistoricById(value.id).subscribe(x => {
        this.ss.setHistoric(value)
        this.edited= false
      })
    })
  }
  onDelete(){
    this.ss.deleteHistoric(this.historic.id!).subscribe(value =>{
        this.ss.setHistorics(value)
    })
  }



}
