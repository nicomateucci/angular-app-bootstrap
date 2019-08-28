import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { ClaseFormulariosComponent } from './clase-formularios/clase-formularios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ValidarPassComponent } from './validar-pass/validar-pass.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  
   ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, ClaseFormulariosComponent, NameEditorComponent, ValidarPassComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
