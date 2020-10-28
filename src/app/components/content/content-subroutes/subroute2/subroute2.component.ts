import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subroute2',
  templateUrl: './subroute2.component.html',
  styleUrls: ['./subroute2.component.css']
})
export class Subroute2Component implements OnInit {
  param: string;
  queryParamName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });

    this.route.queryParams.subscribe(params => {
      this.queryParamName = params['name'];
    });
  }

}
