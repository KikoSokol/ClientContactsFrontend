import { TestBed } from '@angular/core/testing';

import { ClientContactAPIService } from './client-contact-api.service';

describe('ClientContactAPIService', () => {
  let service: ClientContactAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientContactAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
