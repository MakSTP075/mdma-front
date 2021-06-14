import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Coment } from 'src/app/models/coment';
import { Siteview } from 'src/app/models/siteview';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-siteview-show',
  templateUrl: './siteview-show.component.html',
  styleUrls: ['./siteview-show.component.css']
})
export class SiteviewShowComponent implements OnInit {
site: Siteview = {}
coments: Coment [] = []
form: FormGroup
edited: boolean = false
  constructor(private ss: StateServiceService, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      details: [{value: null}]

    })
  }

  ngOnInit(): void {
    this.ss.sietviews$.subscribe(value => {
      this.site = value
      this.form.patchValue(this.site)
    })
    this.ss.coments$.subscribe(value => {
      this.coments = value
    })
    this.form.controls["details"].valueChanges.subscribe(arg => this.edited = true);

  }

  saveChanges(){
    this.site.details = this.form.controls["details"].value
    this.ss.updateSiteview(this.site).subscribe(value => {
      this.ss.getSiteviewById(value.id).subscribe(x => {
        this.ss.setSietview(value)
        this.edited= false
      })
    })
  }
  onDelete(){
    this.ss.deleteSiteview(this.site.id!).subscribe(value =>{
        this.ss.setSietviews(value)
    })
  }

}
