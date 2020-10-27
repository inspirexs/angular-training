import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentRequest } from 'src/app/models/documentRequest';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  traveller: Traveller = null;
  documentForm: FormGroup;

  constructor(private mercuryClientService: MercuryClientService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.getTraveller();
    this.documentForm = this.fb.group({
      documentType: ['', [Validators.required, Validators.pattern('(PASSPORT|ID_CARD)')]],
      documentNumber: ['', Validators.required],
      documentCountry: ['', Validators.required]
    });
  }

  getDefaultTraveller(): void{
    this.mercuryClientService.getTraveller('PASSPORT', 'LU01201LU', 'ALA').subscribe(data => {
      console.log(data);
      this.traveller = data;
      console.log(data.emailAddress);
    }, error => {
      console.log(error);
    });
  }

  clearTraveller(): void{
    this.traveller = null;
  }

  submitForm(): void{
    console.log(this.documentForm);
    const documentRequest: DocumentRequest = Object.assign({}, this.documentForm.value);
    console.log(documentRequest);

    this.mercuryClientService.getTraveller(documentRequest.documentType, documentRequest.documentNumber, documentRequest.documentCountry)
    .subscribe(data => {
      console.log(data);
      this.traveller = data;
    });
  }

}
