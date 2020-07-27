import { TestBed } from '@angular/core/testing';

import { WsocketService } from './wsocket.service';

describe('WsocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsocketService = TestBed.get(WsocketService);
    expect(service).toBeTruthy();
  });
});
