import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from 'src/app/components/new-folder-dialog/new-folder-dialog.component';
import { Note } from 'src/app/note';
import { EditNoteDialogComponent } from '../edit-note-dialog/edit-note-dialog.component';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);

  readonly dialog = inject(MatDialog);
  
    openEditNoteDialog() {
      const dialogRef = this.dialog.open(EditNoteDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openNewFolderDialog() {
      const dialogRef = this.dialog.open(NewFolderDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
