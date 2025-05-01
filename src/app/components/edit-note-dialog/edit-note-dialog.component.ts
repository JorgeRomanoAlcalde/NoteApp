import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html',
  styleUrls: ['./edit-note-dialog.component.css']
})
export class EditNoteDialogComponent {
  constructor(
          public dialogRef: MatDialogRef<EditNoteDialogComponent>,
        ) {}
      
        onNoClick(): void {
          this.dialogRef.close();
        }
}
