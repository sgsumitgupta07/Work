import { TestBed } from '@angular/core/testing';

import { PreventFormsGuard } from './prevent-forms.guard';

describe('PreventFormsGuard', () => {
  let guard: PreventFormsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventFormsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
