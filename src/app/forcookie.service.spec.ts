import { TestBed } from '@angular/core/testing';

import { ForcookieService } from './forcookie.service';

describe('ForcookieService', () => {
  let service: ForcookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
