import { Injectable } from '@angular/core';
import Dexie from '@dpogue/dexie';

interface Note {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddNewService {
  db: any;
  constructor() {
    this.configDb();
  }

  configDb() {
    this.db = new Dexie('noteDb');
    this.db.version(2).stores({
      note: '++id,title, description'
    });
  }

  addnote(note: Note) {
    this.db.note.add(note);
  }

  update(note: any) {
      this.db.note.update(note.id, note);
  }

}
