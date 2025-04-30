import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { PinnedComponent } from "./components/pinned/pinned.component";
import { AllNotesComponent } from "./components/all-notes/all-notes.component";
import { FoldersComponent } from "./components/folders/folders.component";
import { TrashcanComponent } from "./components/trashcan/trashcan.component";

const routes : Routes = [
    { path: "", component: IndexComponent },
    { path: "all-notes", component: AllNotesComponent },
    { path: "pinned", component: PinnedComponent },
    { path: "folders", component: FoldersComponent },
    { path: "trashcan", component: TrashcanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }