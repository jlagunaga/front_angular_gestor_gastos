import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuario';
import { UsuarioService } from '../../servicio/usuario.service';
import { url } from '../../servicio/global';
declare var $: any;

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css'],
  providers: [UsuarioService]
})
export class NewUsuarioComponent implements OnInit {

  public titulo;
  public objUsuario: Usuarios;
  public alerta: string = 'Defecto';
  public Error: string = 'Defecto';
  public FileUplodes:Array<File>;
  public id_res:any;

  constructor(private _usuarioProvider: UsuarioService) {
    this.titulo = "Nuevo Usuario";
    this.objUsuario = new Usuarios(0, '', '', '', 0, '', '', 'Seleccionar...', 'Seleccionar...', '', '');
    this.generar_Alertas();

  }

  ngOnInit(): void {
    
  }

  onSubmit(form) {
    // Guardar Usuario
    this._usuarioProvider.saveUsuario(this.objUsuario).subscribe(
      Response => {
          this.id_res= Response.id[0]._id;

         //console.log(url+"usuario-image/"+this.id_res);

					if(this.FileUplodes){
						this._usuarioProvider.makeFileRequest(url+"usuario-image/"+this.id_res, this.FileUplodes, 'imagen')
						.then((result:any) => {
              $('#alerta').append(this.alerta);
              console.log();
							form.reset();
						});
					}else{
            $('#alerta').append(this.Error);
            console.log('Error');
						form.reset();
					}

      },
      error => {
        $('#alerta').append(this.Error);
        console.log(<any>error);
      }
    );
  }

  generar_Alertas() {
    this.alerta = `<div class="alert alert-success" role="alert">
        Usuario Guardado con Exito!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;

    this.Error= `<div class="alert alert-danger" role="alert">
    Error al guardar
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
  }

fileChange(fileInput:any){
  this.FileUplodes=fileInput.target.files;
}


}// fin de clase 
