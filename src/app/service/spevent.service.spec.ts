import { TestBed } from '@angular/core/testing';

import { SpeventService } from './spevent.service';

describe('SpeventService', () => {
  let service: SpeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
