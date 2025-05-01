import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/note';
import { DiscardDialogComponent } from '../discard-dialog/discard-dialog.component';
import { DiscardAllDialogComponent } from '../discard-all-dialog/discard-all-dialog.component';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.css']
})
export class TrashcanComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);

  readonly dialog = inject(MatDialog);

  openDiscardDialog() {
    const dialogRef = this.dialog.open(DiscardDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDiscardAllDialog() {
    const dialogRef = this.dialog.open(DiscardAllDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
