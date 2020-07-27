import { TestBed } from '@angular/core/testing';

import { SpadminService } from './spadmin.service';

describe('SpadminService', () => {
  let service: SpadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
