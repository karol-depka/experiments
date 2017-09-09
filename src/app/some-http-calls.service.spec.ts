import { TestBed, inject } from '@angular/core/testing';

import { SomeHttpCallsService } from './some-http-calls.service';

describe('SomeHttpCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeHttpCallsService]
    });
  });

  it('should be created', inject([SomeHttpCallsService], (service: SomeHttpCallsService) => {
    expect(service).toBeTruthy();
  }));
});
