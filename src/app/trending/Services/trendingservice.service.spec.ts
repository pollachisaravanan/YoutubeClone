import { TestBed } from '@angular/core/testing';

import { TrendingserviceService } from './trendingservice.service';

describe('TrendingserviceService', () => {
  let service: TrendingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
