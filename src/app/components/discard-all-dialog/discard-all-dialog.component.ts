import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DiscardDialogComponent } from '../discard-dialog/discard-dialog.component';

@Component({
  selector: 'app-discard-all-dialog',
  templateUrl: './discard-all-dialog.component.html',
  styleUrls: ['./discard-all-dialog.component.css']
})
export class DiscardAllDialogComponent {

  constructor(
      public dialogRef: MatDialogRef<DiscardDialogComponent>,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}
