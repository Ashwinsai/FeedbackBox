import { TestBed, inject } from '@angular/core/testing';

import { InventionsService } from './inventions.service';

describe('InventionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventionsService]
    });
  });

  it('should be created', inject([InventionsService], (service: InventionsService) => {
    expect(service).toBeTruthy();
  }));
});
