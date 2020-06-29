import { Component, OnInit } from '@angular/core';
import { url } from '../../../servicio/global';
import { utiles } from '../../../servicio/utiles';
import { cate_Tienda_Service } from '../../../servicio/cate_tienda.service'
import { ActivatedRoute } from '@angular/router'
declare var $: any;

@Component({
  selector: 'app-tienda-edit',
  templateUrl: '../tienda-new/tienda-new.component.html',
  styleUrls: ['./tienda-edit.component.css'],
  providers: [cate_Tienda_Service]
})
export class TiendaEditComponent implements OnInit {

  public objCateTienda: any;
  public titulo: string;
  private _utile: utiles;
  
  constructor(
    private _cate_Tienda_Service: cate_Tienda_Service,
    private _route:ActivatedRoute
  ) {
    this.titulo = 'Nuevo Categoria Tienda';
    this.objCateTienda = { ID_CAT_TIENDA: 0, NOMBRE_CAT_TIENDA: "" }
    this._utile = new utiles();
  }

  ngOnInit(): void {
    this._route.params.subscribe(idParams=>{
      let {id}=idParams
      this.getTiendaComponent(id);
    });
  }

  onSubmit(form) {
    console.log(this.objCateTienda);

    this._cate_Tienda_Service.editCateTienda(this.objCateTienda).subscribe(
      response => {
        console.log('cate tinda ' + response[0]);
        $('#alerta').append(this._utile.generarAlertas().alerta);
      },
      error => {
        console.log('error guardar Cate Tienda: ' + error);
        $('#alerta').append(this._utile.generarAlertas().error);
      }
    );
  }


  getTiendaComponent(id) {
    this._cate_Tienda_Service.getCateTienda(id).subscribe(
      response => {
        this.objCateTienda = response[0];
      },
      error => {
        console.log('cargar cate Tienda ' + error);
      }
    );
  }
} // fin de clase 
