import { Component, OnInit } from '@angular/core';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  traveller: any = null;

  constructor(private mercuryClientService: MercuryClientService) { }

  ngOnInit(): void {

  }

  getTraveller(): void{


    this.mercuryClientService.getTraveller().subscribe(data => {
      console.log(data);
      this.traveller = data;
    }, error => {
      console.log(error);
    });
  }

}
