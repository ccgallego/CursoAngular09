import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from '../model/Usuarios';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  datos: Usuarios;
  user: Usuarios = new Usuarios();
 

  constructor() { }

  ngOnInit() {
  }

  enviarDatos(){
    this.datos = this.user;
    delete this.user;
    this.user = new Usuarios();
  }

}
