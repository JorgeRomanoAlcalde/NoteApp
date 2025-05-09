import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceComponent } from 'src/app/service/service.component';

export interface DialogData {
  noteId: any;
  noteTitle: any;
  noteBody: any;
}

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.css']
})
export class EditNoteDialogComponent {

  noteId: any;
  noteTitle: any;
  noteBody: any;

  constructor(
    public dialogRef: MatDialogRef<EditNoteDialogComponent>, private service: ServiceComponent,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { 
    this.noteId = data.noteId;
    this.noteTitle = data.noteTitle;
    this.noteBody = data.noteBody;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // Update Note
  editNote() {

    const updatedNoteData = {
      title: this.noteTitle,
      body: this.noteBody
    };
    this.service.updateNote(this.noteId, updatedNoteData).subscribe(
      (response) => {
        console.log('Nota editada exitosamente:', response);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error al editar la nota:', error);
        this.dialogRef.close(false);
      }
    );
  }
}
