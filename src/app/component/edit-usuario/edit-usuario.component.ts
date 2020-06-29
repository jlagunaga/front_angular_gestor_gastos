import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuario';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../../servicio/usuario.service';
import { url } from '../../servicio/global';
declare var $: any;

@Component({
  selector: 'app-edit-usuario',
  templateUrl: '../new-usuario/new-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css'],
  providers: [UsuarioService]
})
export class EditUsuarioComponent implements OnInit {

  public titulo;;
  public objUsuario: Usuarios;
  public alerta: string = 'Defecto';
  public Error: string = 'Defecto';
  public FileUplodes: Array<File>;
  public id_res: any;


  constructor(
    private _usuarioService: UsuarioService,
    private _ActivateRoute: ActivatedRoute,
    private _Route: Router
  ) {
    this.objUsuario = new Usuarios(0, '', '', '', 0, '', '', '', '', '', '');
    this.titulo = "Editar Usuario";
    this.generar_Alertas();

  }

  ngOnInit(): void {
    this._ActivateRoute.params.subscribe(objparams => {
      let { id } = objparams;
      this.id_res = id;
      this.getUsuario(id);
    });

  }


  // generar funciones 
  onSubmit(form) {
    // Guardar Usuario
    this._usuarioService.editUsuario(this.objUsuario).subscribe(
      Response => {
        //this.id_res= Response.id[0]._id;

        //console.log(url+"usuario-image/"+this.id_res);

        if (this.FileUplodes) {
          this._usuarioService.makeFileRequest(url + "usuario-image/" + this.id_res, this.FileUplodes, 'imagen')
            .then((result: any) => {
              $('#alerta').append(this.alerta);
              console.log(Response);
              form.reset();
            });
        } else {
          $('#alerta').append(this.Error);
          form.reset();
        }

      },
      error => {
        $('#alerta').append(this.Error);
        console.log(<any>error);
      }
    );

  }

  fileChange(fileInput: any) {
    this.FileUplodes = fileInput.target.files;
  }

  getUsuario(id) {
    this._usuarioService.getUsuario(id).subscribe(
      response => {
        this.objUsuario = response[0];
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  generar_Alertas() {
    this.alerta = `<div class="alert alert-success" role="alert">
        Usuario Modificado.. con Exito!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;

    this.Error = `<div class="alert alert-danger" role="alert">
    Error al guardar
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
  }

}//  fin de clase 
