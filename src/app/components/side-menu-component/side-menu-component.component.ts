import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu-component',
  templateUrl: './side-menu-component.component.html',
  styleUrls: ['./side-menu-component.component.css']
})
export class SideMenuComponentComponent implements OnInit {


  constructor(route: ActivatedRoute) {

    route.params.subscribe(params => console.log("side menu id parameter",params['id']));

}

  ngOnInit(): void {
  }

}
