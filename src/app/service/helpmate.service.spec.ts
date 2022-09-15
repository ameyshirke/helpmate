import { TestBed } from '@angular/core/testing';

import { HelpmateService } from './helpmate.service';

describe('HelpmateService', () => {
  let service: HelpmateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpmateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
