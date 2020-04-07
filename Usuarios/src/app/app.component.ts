import { Component } from '@angular/core';
import {Usuarios} from './model/Usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usuarios';

  public listUsers: Usuarios[] = [];
  constructor() {
    let usuario = new Usuarios();
    usuario.id = 1;
    usuario.username = 'cgallego';
    usuario.password = '12345';
    usuario.name = 'Cristian Camilo Gallego';
    usuario.email = 'cgallego202@gmail.com';

    let usuario2 = new Usuarios();
    usuario2.id = 2;
    usuario2.username = 'jdavid';
    usuario2.password = '54321';
    usuario2.name = 'Juan David Gallego';
    usuario2.email = 'fbdavid37@gmail.com';
    this.listUsers.push(usuario, usuario2);
  

    console.log(this.listUsers);
    

  }


}
