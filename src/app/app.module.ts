import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FileUploadModule } from 'ng2-file-upload';
import { NweFileUploadComponent } from './nwe-file-upload/nwe-file-upload.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiElementoComponent } from './mi-elemento/mi-elemento.component';

@NgModule({
  declarations: [
    AppComponent,
    NweFileUploadComponent,
    MiElementoComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
