import { MainService } from './../main.service';
import { ShowNoteService } from './show-note.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shownote',
  templateUrl: './show-note.component.html',
  styleUrls: ['./show-note.component.scss']
})
export class ShowNoteComponent implements OnInit {
  panelOpenState = false;
  allNotes: any;
  searchTerm = '';
  constructor(
    private showNoteService: ShowNoteService,
    private mainService: MainService,
    private router: Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  async getNotes() {
    this.allNotes = await this.showNoteService.getNotes();
  }

  deleteNotes(id: number) {
    this.showNoteService.deleteNote(id);
    this.getNotes();
  }

  editNotes(item: any) {
    this.mainService.setNote(item);
    this.router.navigate(['/edit']);
  }

  setSearch(event: any) {
    if (event.key === undefined) {
      return;
    }
    this.searchTerm += event.key;
    this.managerSearchTerm();
  }

  managerSearchTerm() {
    if (this.searchTerm.length > 3) {
      this.rotateTerm(this.searchTerm);
    } else {
      this.getNotes();
    }
  }

  rotateTerm(term: string) {
    this.allNotes = this.allNotes.map((note: any) => {
      if (note.title.includes(term)) {
          return note;
      }
    }).filter((note: any) => typeof note !== 'undefined');
  }

}
