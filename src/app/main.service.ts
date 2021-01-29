import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  noteUpdate: any;
  constructor() { }

  setNote(note: any) {
    this.noteUpdate = note;
  }
}
