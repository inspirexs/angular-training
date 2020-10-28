import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Traveller } from '../models/traveller';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MercuryClientService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private router: Router
    ) { }

  test(): void{
    alert('TEST WORKS');
  }

  getTraveller(documentType: string, documentNumber: string, documentCountry: string): Observable<Traveller>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: this.authService.getToken()
    });

    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<Traveller>('https://mercury-api.st.globalblue.com:443/api/Globalblue/3.0/Members/documentType=' + documentType + '&documentNumber=' + documentNumber + '&documentCountry=' + documentCountry, { headers: httpHeaders } ).pipe(
      catchError(error => {
        console.log(error);
        this.router.navigate(['/content']);
        return of(null);
      })
    );
  }
}
