import { TestBed } from '@angular/core/testing';

import { MyKomikuService } from './my-komiku.service';

describe('MyKomikuService', () => {
  let service: MyKomikuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyKomikuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
