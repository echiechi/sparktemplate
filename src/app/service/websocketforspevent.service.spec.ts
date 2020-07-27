import { TestBed } from '@angular/core/testing';

import { WebsocketforspeventService } from './websocketforspevent.service';

describe('WebsocketforspeventService', () => {
  let service: WebsocketforspeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketforspeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
