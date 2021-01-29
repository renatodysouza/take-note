import { TestBed } from '@angular/core/testing';

import { ShowNoteService } from './show-note.service';

describe('ShowNoteService', () => {
  let service: ShowNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
