import { Note } from './interfaces/note';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  noteUpdate: Note;
  constructor() { }

  setNote(note: Note) {
    this.noteUpdate = note;
  }
}
