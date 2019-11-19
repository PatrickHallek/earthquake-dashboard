import { TestBed } from '@angular/core/testing';

import { ApiUsgsService } from './api-usgs.service';

describe('ApiUsgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUsgsService = TestBed.get(ApiUsgsService);
    expect(service).toBeTruthy();
  });
});
