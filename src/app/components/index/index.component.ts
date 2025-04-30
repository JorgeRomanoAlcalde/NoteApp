import { Component, Input } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);
}
