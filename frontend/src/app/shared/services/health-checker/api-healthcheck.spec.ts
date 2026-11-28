import { TestBed } from '@angular/core/testing';
import { ApiHealthcheck } from './api-healthcheck';

describe('ApiHealthcheck', () => {
  let service: ApiHealthcheck;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHealthcheck);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
