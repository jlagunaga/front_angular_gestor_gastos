import { Component, OnInit } from '@angular/core';
import { url } from '../../../servicio/global';
import { utiles } from '../../../servicio/utiles';
import { serv_financieros } from '../../../servicio/serv_financieros.service'
import { provideRoutes } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-serv-finan-new',
  templateUrl: './serv-finan-new.component.html',
  styleUrls: ['./serv-finan-new.component.css'],
  providers:[serv_financieros]
})
export class ServFinanNewComponent implements OnInit {

  public objServEntFinan: any;
  public titulo: string;
  private _utile: utiles;
  constructor(
    private _serv_financieros: serv_financieros
  ) {
    this.titulo = 'Nuevo Servicio Financiero';
    this.objServEntFinan = { ID_SERVICIO_FINANCIERO: 0, NOMBRE_SERV_FINAN: "" , DESCRIPCION:""}
    this._utile = new utiles();
  }

  ngOnInit(): void {
    
  }

  onSubmit(form) {
    this._serv_financieros.saveServicioFinan(this.objServEntFinan).subscribe(
      response => {
        console.log('cate tinda ' + response[0]);
        $('#alerta').append(this._utile.generarAlertas().alerta);
        form.reset();
      },
      error => {
        console.log('error guardar Cate Tienda: '+error);
        $('#alerta').append(this._utile.generarAlertas().error);
      }
    );
  }
  
}// fin de clase
