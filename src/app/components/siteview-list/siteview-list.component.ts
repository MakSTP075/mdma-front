import { Component, OnInit } from '@angular/core';
import { Siteview } from 'src/app/models/siteview';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-siteview-list',
  templateUrl: './siteview-list.component.html',
  styleUrls: ['./siteview-list.component.css']
})
export class SiteviewListComponent implements OnInit {

  sites: Siteview[] = [];
  constructor(private ss: StateServiceService) { }

  ngOnInit(): void {
    this.ss.siteviews$.subscribe(value => {
      this.sites = value
     
    })

  }
  selectSite(index: number){
       this.ss.setSietview(this.sites[index])
      }


}

