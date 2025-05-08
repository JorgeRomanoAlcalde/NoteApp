import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/note';
import { DiscardDialogComponent } from '../discard-dialog/discard-dialog.component';
import { DiscardAllDialogComponent } from '../discard-all-dialog/discard-all-dialog.component';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.css']
})
export class TrashcanComponent {
  noteTitle = '';
  noteModel = new Note('', '', '', '', '', false, false);

  discardNotes: any;

  constructor(private service: ServiceComponent) {}

  ngOnInit(): void {
    this.service.noteRequest().subscribe(data => {
      this.discardNotes = data.discardNotes;
      console.log(data);
    });
  }

  readonly dialog = inject(MatDialog);

  openDeleteDialog(noteId: any) {
    const dialogRef = this.dialog.open(DiscardDialogComponent, {
      data: { noteId: noteId }, // Pasar el noteId a la propiedad 'data' del diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.ngOnInit();
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  openDiscardAllDialog() {
    const dialogRef = this.dialog.open(DiscardAllDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.ngOnInit(); // Recargar las notas después de descartar todas
      }
    });
  }
}