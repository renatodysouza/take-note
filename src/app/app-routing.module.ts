import { ShowNoteComponent } from './show-note/show-note.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';

const routes: Routes = [
  { path: 'new', component: AddNewComponent},
  { path: 'edit', component: AddNewComponent},
  { path: 'show-note', component: ShowNoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
