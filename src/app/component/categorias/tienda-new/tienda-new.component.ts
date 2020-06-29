import { Component, OnInit } from '@angular/core';
import { url } from '../../../servicio/global';
import { utiles } from '../../../servicio/utiles';
import { cate_Tienda_Service } from '../../../servicio/cate_tienda.service'

declare var $: any;

@Component({
  selector: 'app-tienda-new',
  templateUrl: './tienda-new.component.html',
  styleUrls: ['./tienda-new.component.css'],
  providers: [cate_Tienda_Service]
})
export class TiendaNewComponent implements OnInit {

  public objCateTienda: any;
  public titulo: string;
  private _utile: utiles;
  constructor(
    private _cate_Tienda_Service: cate_Tienda_Service
  ) {
    this.titulo = 'Nuevo Categoria Tienda';
    this.objCateTienda = { ID_CAT_TIENDA: 0, NOMBRE_CAT_TIENDA: "" }
    this._utile = new utiles();
  }

  ngOnInit(): void {
    //console.log(this._utile.get_valor().valor2);
  }

  onSubmit(form) {
    this._cate_Tienda_Service.saveCateTienda(this.objCateTienda).subscribe(
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

} // fin de clase 
