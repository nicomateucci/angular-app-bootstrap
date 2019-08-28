import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
  apellido = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
  setApellido(){
    this.apellido.setValue('Flores');
    console.log('Entro al metodo setApellido, apellido vale ' + this.apellido.value);
  }
  removeApellido(){
    this.apellido.setValue('');
  }
}