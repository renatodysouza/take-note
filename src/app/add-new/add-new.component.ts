import { MainService } from './../main.service';
import { AddNewService } from './add-new.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  form: FormGroup;
  error = false;
  editNoteValue: any;
  constructor(
    private snackBar: MatSnackBar,
    private addNewService: AddNewService,
    private mainService: MainService,
    private fb: FormBuilder
    ) {
      this.editNoteValue = mainService.noteUpdate;
    }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
     this.form = this.fb.group({
       title: [this.editNoteValue?.title || '', Validators.required],
       description: [this.editNoteValue?.description || ''],
     });
  }

  // eslint-disable-next-line
  sendForm() {
    if (this.form.valid) {
      this.choiceWithUpdate();
      this.form.reset();
      this.form.controls.title.setErrors(null);
      this.openSnackBar('saved with sucess', '');
      this.error = false;
    } else {
      this.error = true;
    }
  }

  choiceWithUpdate() {
    if (this.editNoteValue?.title) {
      this.form.value.id = this.editNoteValue?.id;
      this.addNewService.update(this.form.value);
    } else {
        this.addNewService.addnote(this.form.value);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}

