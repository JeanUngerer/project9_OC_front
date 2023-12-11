import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-note-modal',
  templateUrl: './new-note-modal.component.html',
  styleUrls: ['./new-note-modal.component.scss']
})
export class NewNoteModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewNoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {patientId: number, content: string}
  ) {
  }

  form = new FormGroup({
    note: new FormControl(''),
  });


  ngOnInit(): void {
    if (this.data.content != null && this.data.content != '') {
      this.form.value.note = this.data.content;
    }
  }
  save() {
    this.dialogRef.close(this.form?.value.note);
  }

  close() {
    this.dialogRef.close(null);
  }
}
