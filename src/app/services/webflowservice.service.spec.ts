import { TestBed } from '@angular/core/testing';

import { WebflowserviceService } from './webflowservice.service';

describe('WebflowserviceService', () => {
  let service: WebflowserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebflowserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
