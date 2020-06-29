import { Component, OnInit } from '@angular/core';
import { url } from '../../../servicio/global';
import { utiles } from '../../../servicio/utiles';
import { cate_servi_financiero_Service } from '../../../servicio/Cate_servi_financiero.service'
import { ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-ent-finan-edit',
  templateUrl: '../ent-finan-new/ent-finan-new.component.html',
  styleUrls: ['./ent-finan-edit.component.css']
})
export class EntFinanEditComponent implements OnInit {

  public objCateEntFinan: any;
  public titulo: string;
  private _utile: utiles;

  constructor(
    private _cate_servi_financiero_Service: cate_servi_financiero_Service,
    private _route:ActivatedRoute
  ) {
    this.titulo = 'Editar Categoria Tienda';
    this.objCateEntFinan = { ID_CAT_FINANCIERA: 0, NOMBRE_CATEGORIA: "" }
    this._utile = new utiles();
  }

  ngOnInit(): void {
    this._route.params.subscribe(paramsID=>{
      let {id}=paramsID;
      this.get_cateEntFinan(id);
    });


  }

  onSubmit(form) {
    this._cate_servi_financiero_Service.editServicioFinan(this.objCateEntFinan).subscribe(
      response => {
        console.log('cate tinda ' + response[0]);
        $('#alerta').append(this._utile.generarAlertas().alerta);
        form.reset();
      },
      error => {
        console.log('error guardar Cate Tienda: ' + error);
        $('#alerta').append(this._utile.generarAlertas().error);
      }
    );
  }

  get_cateEntFinan(id) {
    this._cate_servi_financiero_Service.getServicioFinanciero(id).subscribe(
      response => {
        this.objCateEntFinan=response[0];
      },
      error => {
        console.log('error en getServicioFinan ='+error);
      }
    );
  }

}// fin de clase
