import { Component, OnInit } from '@angular/core';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  traveller: Traveller = null;

  constructor(private mercuryClientService: MercuryClientService) { }

  ngOnInit(): void {
    //this.getTraveller();
  }

  getTraveller(): void{
    this.mercuryClientService.getTraveller().subscribe(data => {
      console.log(data);
      this.traveller = data;
      console.log(data.emailAddress);
    }, error => {
      console.log(error);
    });
  }

}
