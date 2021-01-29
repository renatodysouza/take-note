import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './layout/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { AddNewComponent } from './add-new/add-new.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ShowNoteComponent } from './show-note/show-note.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AddNewComponent,
    ShowNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
