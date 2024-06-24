import { TestBed } from '@angular/core/testing';

import { ZipcodebaseService } from './zipcodebase.service';

describe('ZipcodebaseService', () => {
  let service: ZipcodebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipcodebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
