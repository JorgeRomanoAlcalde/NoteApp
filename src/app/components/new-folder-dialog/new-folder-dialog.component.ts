import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.css']
})
export class NewFolderDialogComponent {

  newFolderName: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewFolderDialogComponent>,private service: ServiceComponent
  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  //Create Folder
  createFolder() {
    const newFolder = {
      folder: this.newFolderName,
    };

    this.service.createFolder(newFolder).subscribe(
      (error) => {
        console.error('Error creating the folder:', error);
      }
    );
    this.dialogRef.close();
  }
}
