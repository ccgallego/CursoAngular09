import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Usuarios } from '../model/Usuarios';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit, OnChanges {

  @Input() public datosRecibidos: Usuarios;

  public listUser: Array<Usuarios> = [];

  mostrarTabla: boolean = true;
  typePassword: string = 'hidetextTrue';
  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.mostrar();
  }

  mostrarClave(usuario:Usuarios) {
    if(this.typePassword === 'hidetextTrue'){
      this.typePassword = 'hidetextFalse';
    } else if(this.typePassword === 'hidetextFalse'){
      this.typePassword = 'hidetextTrue';
    }
  }

  mostrar() {
    if(this.datosRecibidos != undefined) {
      this.listUser.push(this.datosRecibidos);
      this.mostrarTabla = true;
    }
  }

  eliminar(usuario: Usuarios){
    this.listUser.splice(this.listUser.indexOf(usuario),1) 
  }

  actualizar(){}

}
