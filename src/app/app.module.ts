import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppRoutingModule } from './app-routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    ViewerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxCsvParserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
