import { TestBed } from '@angular/core/testing';

import { LearningConfigService } from './learning-config.service';

describe('LearningConfigService', () => {
  let service: LearningConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
