import { TestBed } from '@angular/core/testing';

import { BdproductoService } from './bdproducto.service';

describe('BdproductoService', () => {
  let service: BdproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
