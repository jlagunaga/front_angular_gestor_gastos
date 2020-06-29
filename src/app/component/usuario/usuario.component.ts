import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicio/usuario.service';
import { Usuarios } from '../../models/usuario';
import { url } from '../../servicio/global';
import { Router } from '@angular/router'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  public arr_usuarios: Usuarios[];
  public url = url;
  private messaje: string;
  public  pageActual:number;

  constructor(
    private _usuarioService: UsuarioService,
    private _route: Router
    ) {
  }

  ngOnInit(): void {
    this.getUsuarios();
    console.log('evento on Init');
  }

  ngDoCheck(){
    console.log('evento do check');
  }

  // funciones
  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(
      response => {
        this.arr_usuarios = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  public get_small_Name_LastName(nombres: string, apellidos: string) {
    var objnombre = nombres.substring(0, (nombres.indexOf(' ') <= 0) ? nombres.length : nombres.indexOf(' '));
    var objapellido = apellidos.substring(0, (apellidos.indexOf(' ') <= 0) ? apellidos.length : apellidos.indexOf(' '));
    return objnombre + ' ' + objapellido;
  }

  desactivarUsuario(id) {
    this._usuarioService.desactivarUsuario(id).subscribe(
      response => {
        this.messaje = response;
        window.location.reload();
      },
      error => {
        console.log(error);

      }
    );
  }


}// fin de clase 
