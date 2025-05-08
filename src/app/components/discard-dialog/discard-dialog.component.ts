import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceComponent } from 'src/app/service/service.component';

export interface DialogData {
  noteId: any;
}

@Component({
  selector: 'app-discard-dialog',
  templateUrl: './discard-dialog.component.html',
  styleUrls: ['./discard-dialog.component.css']
})
export class DiscardDialogComponent {

  noteId: any;

  constructor(
    public dialogRef: MatDialogRef<DiscardDialogComponent>,
    private service: ServiceComponent,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.noteId = data.noteId;
  }

  onNoClick(): void {
    this.dialogRef.close(false); // Pasar 'false' si se cancela
  }

  // Delete Note
  deleteNote() {
    this.service.deleteNote(this.noteId).subscribe(
      (response) => {
        console.log('Nota eliminada exitosamente:', response);
        this.dialogRef.close(true); // Pasar 'true' si la eliminación fue exitosa
        // Aquí podrías emitir un evento o usar un servicio para notificar la eliminación
      },
      (error) => {
        console.error('Error al eliminar la nota:', error);
        this.dialogRef.close(false); // Pasar 'false' si hubo un error
        // Aquí podrías mostrar un mensaje de error al usuario (opcional, ya que el componente que abre el diálogo puede manejarlo)
      }
    );
    this.dialogRef.close();
  }
}