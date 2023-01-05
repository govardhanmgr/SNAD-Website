import { TestBed } from '@angular/core/testing';

import { SibComService } from './sib-com.service';

describe('SibComService', () => {
  let service: SibComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SibComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
