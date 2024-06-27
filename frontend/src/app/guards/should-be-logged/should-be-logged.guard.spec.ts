import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shouldBeLoggedGuard } from './should-be-logged.guard';

describe('shouldBeLoggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shouldBeLoggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
