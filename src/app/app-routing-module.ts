import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { PinnedComponent } from "./pinned/pinned.component";

const routes : Routes = [
    { path: "", component: IndexComponent },
    { path: "pinned", component: PinnedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }