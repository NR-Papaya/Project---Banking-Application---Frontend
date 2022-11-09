import { TestBed } from '@angular/core/testing';

import { DatabaseConnectionServiceService } from './database-connection.service';

describe('DatabaseConnectionServiceService', () => {
  let service: DatabaseConnectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseConnectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
