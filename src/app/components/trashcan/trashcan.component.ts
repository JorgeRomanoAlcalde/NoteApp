import { Component } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.css']
})
export class TrashcanComponent {
  noteTitle = '';
  noteModel = new Note('','','','',false,false);
}
