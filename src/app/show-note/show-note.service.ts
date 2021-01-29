import { Injectable } from '@angular/core';
import Dexie from '@dpogue/dexie';

@Injectable({
  providedIn: 'root'
})
export class ShowNoteService {
  db: any;
  Dexie: any;
  allnotes: Array<any>;
  constructor() { }



  async getNotes() {
    this.db = new Dexie('noteDb');
    this.db.version(2).stores({
      note: 'title, description'
    });
    // tslint:disable-next-line: no-string-literal
    const note = await this.db['note'].toArray();
    return note;
  }

  async deleteNote(id: number) {
    this.db.note.delete(id);
  }
}
