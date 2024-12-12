import { TestBed } from '@angular/core/testing';

import { SupabeseService } from './supabese.service';

describe('SupabeseService', () => {
  let service: SupabeseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabeseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
