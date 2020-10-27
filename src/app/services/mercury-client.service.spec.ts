/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MercuryClientService } from './mercury-client.service';

describe('Service: MercuryClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MercuryClientService]
    });
  });

  it('should ...', inject([MercuryClientService], (service: MercuryClientService) => {
    expect(service).toBeTruthy();
  }));
});
