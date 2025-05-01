import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.model';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { IndexComponent } from './components/index/index.component';
import { PinnedComponent } from './components/pinned/pinned.component';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { FoldersComponent } from './components/folders/folders.component';
import { FormsModule } from '@angular/forms';
import { TrashcanComponent } from './components/trashcan/trashcan.component';
import { DiscardDialogComponent } from './components/discard-dialog/discard-dialog.component';
import { DiscardAllDialogComponent } from './components/discard-all-dialog/discard-all-dialog.component';
import { NewFolderDialogComponent } from './components/new-folder-dialog/new-folder-dialog.component';
import { EditNoteDialogComponent } from './components/edit-note-dialog/edit-note-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IndexComponent,
    PinnedComponent,
    AllNotesComponent,
    FoldersComponent,
    TrashcanComponent,
    DiscardDialogComponent,
    DiscardAllDialogComponent,
    NewFolderDialogComponent,
    EditNoteDialogComponent,
  ],
  entryComponents:[DiscardDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
