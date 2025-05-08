import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/note';
import { EditNoteDialogComponent } from '../edit-note-dialog/edit-note-dialog.component';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent {
  noteTitle = '';
  noteModel = new Note('','','','','',false,false);

  allNotes: any;
  folderNames: string[] = [];
  
    constructor(private service: ServiceComponent){
      
    }
  
    ngOnInit(): void {
      this.service.noteRequest().subscribe(data => {
        this.allNotes = data.allNotes;
        console.log(data);
      });

      this.service.folderRequest().subscribe(data => {
        this.folderNames = Object.keys(data);
      });
    }

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
