import { Component, OnInit } from '@angular/core';
import { url } from '../../../servicio/global';
import { utiles } from '../../../servicio/utiles';
import { cate_servi_financiero_Service } from '../../../servicio/Cate_servi_financiero.service'
import { provideRoutes } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-ent-finan-new',
  templateUrl: './ent-finan-new.component.html',
  styleUrls: ['./ent-finan-new.component.css'],
  providers:[cate_servi_financiero_Service]
})
export class EntFinanNewComponent implements OnInit {

  public objCateEntFinan: any;
  public titulo: string;
  private _utile: utiles;
  constructor(
    private _cate_servi_financiero_Service: cate_servi_financiero_Service
  ) {
    this.titulo = 'Nuevo Categoria Tienda';
    this.objCateEntFinan = { ID_CAT_FINANCIERA: 0, NOMBRE_CATEGORIA: "" }
    this._utile = new utiles();
  }

  ngOnInit(): void {
    
  }

  onSubmit(form) {
    this._cate_servi_financiero_Service.saveServicioFinan(this.objCateEntFinan).subscribe(
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
