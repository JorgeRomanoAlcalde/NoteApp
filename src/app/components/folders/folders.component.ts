import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from 'src/app/components/new-folder-dialog/new-folder-dialog.component';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);

  readonly dialog = inject(MatDialog);
  
    openNewFolderDialog() {
      const dialogRef = this.dialog.open(NewFolderDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
