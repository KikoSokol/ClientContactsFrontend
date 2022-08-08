import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactTableComponent} from "./components/contact-table/contact-table.component";

const routes: Routes = [
  {path: '', component: ContactTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
