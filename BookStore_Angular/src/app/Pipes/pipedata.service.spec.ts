import { TestBed } from '@angular/core/testing';

import { PipedataService } from './pipedata.service';

describe('PipedataService', () => {
  let service: PipedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
