import { Component } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);
}
