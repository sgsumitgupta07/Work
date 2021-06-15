import { TestBed } from '@angular/core/testing';

import { PreventafterloginGuard } from './preventafterlogin.guard';

describe('PreventafterloginGuard', () => {
  let guard: PreventafterloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventafterloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
