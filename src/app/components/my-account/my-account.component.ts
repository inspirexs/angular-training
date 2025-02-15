import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  traveller: Traveller;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.traveller = data['traveller'];
    });
  }



}
