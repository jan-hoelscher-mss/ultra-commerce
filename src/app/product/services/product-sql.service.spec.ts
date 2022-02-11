import { TestBed } from '@angular/core/testing';

import { ProductSqlService } from './product-sql.service';

describe('ProductSqlService', () => {
  let service: ProductSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
