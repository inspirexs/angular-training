import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Traveller } from '../models/traveller';
import { MercuryClientService } from '../services/mercury-client.service';


@Injectable()
export class TravellerResolver implements Resolve<Traveller>{

  constructor(private mercuryClientService: MercuryClientService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Traveller> {
    return this.mercuryClientService.getTraveller('PASSPORT', 'LU01201LU', 'ALA');
  }
}
