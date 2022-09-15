import { TestBed } from '@angular/core/testing';

import { BookcartdataService } from './bookcartdata.service';

describe('BookcartdataService', () => {
  let service: BookcartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcartdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
