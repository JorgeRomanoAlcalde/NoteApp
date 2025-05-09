import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/note';
import { EditNoteDialogComponent } from '../edit-note-dialog/edit-note-dialog.component';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { ServiceComponent } from 'src/app/service/service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  noteTitle = '';
  noteModel = new Note('', '', '', '', '', false, false);
  backendNotes: any;
  pinnedNotes: any;
  otherNotes: any;
  folderNames: string[] = [];

  constructor(private service: ServiceComponent) {

  }

  ngOnInit(): void {
    this.service.noteRequest().subscribe(data => {
      this.pinnedNotes = data.pinnedNotes;
      console.log(this.pinnedNotes)
      this.otherNotes = data.otherNotes;
      console.log(data);
    });

    this.service.folderRequest().subscribe(data => {
      this.folderNames = Object.keys(data);
    });
  }

  //Create Note
  createNewNote(formData: any) {
    const newNote = {
      title: formData.title,
      body: formData.body,
    };

    this.service.createNote(newNote).subscribe(
      (response) => {
        this.ngOnInit();
      },
      (error) => {
        console.error('Error creating the note:', error);
      }
    );

    this.noteModel.title = " ";
    this.noteModel.body = " ";
  }

  //Discard Note
  discardNote(noteId: any) {
    this.service.discardNote(noteId).subscribe(
      (error) => {
        console.error('Error discarding the folder:', error);
      }
    );
  }

  readonly dialog = inject(MatDialog);

  openEditNoteDialog(noteId: any, noteTitle: any, noteBody: any) {
    const dialogRef = this.dialog.open(EditNoteDialogComponent, {
      data: { noteId: noteId,
              noteTitle: noteTitle,
              noteBody: noteBody
       },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.ngOnInit();
      }
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
