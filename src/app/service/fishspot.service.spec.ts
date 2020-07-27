import { TestBed } from '@angular/core/testing';

import { FishspotService } from './fishspot.service';

describe('FishspotService', () => {
  let service: FishspotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishspotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
