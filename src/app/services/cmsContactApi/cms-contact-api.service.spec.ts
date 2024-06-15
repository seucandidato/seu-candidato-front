import { TestBed } from '@angular/core/testing';

import { CmsContactApiService } from './cms-contact-api.service';

describe('CmsContactApiService', () => {
  let service: CmsContactApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmsContactApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
