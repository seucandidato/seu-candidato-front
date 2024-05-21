import { TestBed } from '@angular/core/testing';

import { AuthServiceApiService } from './auth-api.service';

describe('AuthServiceApiService', () => {
  let service: AuthServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
