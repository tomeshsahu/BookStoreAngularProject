import { TestBed } from '@angular/core/testing';

import { AuthguarddataService } from './authguarddata.service';

describe('AuthguarddataService', () => {
  let service: AuthguarddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguarddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
