import { Component } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);
}
