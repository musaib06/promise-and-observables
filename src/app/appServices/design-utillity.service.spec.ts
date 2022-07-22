import { TestBed } from '@angular/core/testing';

import { DesignUtillityService } from './design-utillity.service';

describe('DesignUtillityService', () => {
  let service: DesignUtillityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtillityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
