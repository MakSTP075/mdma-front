import { Component, OnInit } from '@angular/core';
import { Historic } from 'src/app/models/historic';
import { StateServiceService } from 'src/app/services/state-service.service';

@Component({
  selector: 'app-historic-list',
  templateUrl: './historic-list.component.html',
  styleUrls: ['./historic-list.component.css']
})
export class HistoricListComponent implements OnInit {

  historics: Historic[] = [];
  constructor(private ss: StateServiceService) { }

  ngOnInit(): void {
    this.ss.historics$.subscribe(value => {
      this.historics = value
      this.historics.find
    })

  }
  selectHistoric(index: number){
       this.ss.setHistoric(this.historics[index])
      }


}
