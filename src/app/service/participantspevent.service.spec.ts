import { TestBed } from '@angular/core/testing';

import { ParticipantspeventService } from './participantspevent.service';

describe('ParticipantspeventService', () => {
  let service: ParticipantspeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantspeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
