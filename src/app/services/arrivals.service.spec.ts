import { TestBed } from '@angular/core/testing';

import { ArrivalsService } from './arrivals.service';

describe('ArrivalsService', () => {
  let service: ArrivalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrivalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
