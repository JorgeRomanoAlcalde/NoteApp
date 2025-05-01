import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-discard-dialog',
  templateUrl: './discard-dialog.component.html',
  styleUrls: ['./discard-dialog.component.css']
})
export class DiscardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DiscardDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
