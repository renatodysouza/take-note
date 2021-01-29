import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should noteUpdate equal mock when noteUpdate is called', () => {
    const mock = {id:1} as any;
    service.setNote({id:1} as any);
    expect(service.noteUpdate).toEqual(mock);
  });
});
