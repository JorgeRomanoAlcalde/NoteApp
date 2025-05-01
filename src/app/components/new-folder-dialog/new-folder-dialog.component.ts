import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.css']
})
export class NewFolderDialogComponent {
  constructor(
        public dialogRef: MatDialogRef<NewFolderDialogComponent>,
      ) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}
