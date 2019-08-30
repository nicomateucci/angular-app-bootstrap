import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { Clase2828ReactiveFormsComponent } from './clase28-28-reactive-forms/clase28-28-reactive-forms.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  
   ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, NameEditorComponent, Clase2828ReactiveFormsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
