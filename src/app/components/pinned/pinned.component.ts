import { Component } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.css']
})
export class PinnedComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);
}
