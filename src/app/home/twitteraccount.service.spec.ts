import { TestBed } from '@angular/core/testing';

import { TwitteraccountService } from './twitteraccount.service';

describe('TwitteraccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitteraccountService = TestBed.get(TwitteraccountService);
    expect(service).toBeTruthy();
  });
});
