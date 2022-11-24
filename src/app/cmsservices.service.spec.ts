import { TestBed } from '@angular/core/testing';

import { CmsservicesService } from './cmsservices.service';

describe('CmsservicesService', () => {
  let service: CmsservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmsservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
