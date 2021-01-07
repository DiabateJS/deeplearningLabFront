import { TestBed } from '@angular/core/testing';

import { LearningBaseService } from './learning-base.service';

describe('LearningBaseService', () => {
  let service: LearningBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
