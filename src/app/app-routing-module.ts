import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { PinnedComponent } from "./components/pinned/pinned.component";
import { AllNotesComponent } from "./components/all-notes/all-notes.component";

const routes : Routes = [
    { path: "", component: IndexComponent },
    { path: "pinned", component: PinnedComponent },
    { path: "all-notes", component: AllNotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }