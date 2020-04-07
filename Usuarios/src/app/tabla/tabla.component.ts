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

  mostrarTabla: boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.insertar();
  }

  insertar() {
    if(this.datosRecibidos != undefined) {
      this.listUser.push(this.datosRecibidos);
      this.mostrarTabla = true;
    }
  }

  eliminar(){}

  actualizar(){}

}
