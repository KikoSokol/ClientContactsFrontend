import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHomeComponent } from './views/the-home/the-home.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TheHomeComponent,
    ContactTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
