import { Component, OnInit } from '@angular/core';
import { url } from '../../../servicio/global';
import { utiles } from '../../../servicio/utiles';
import { serv_financieros } from '../../../servicio/serv_financieros.service'
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-serv-finan-edit',
  templateUrl: '../serv-finan-new/serv-finan-new.component.html',
  styleUrls: ['./serv-finan-edit.component.css']
})
export class ServFinanEditComponent implements OnInit {

  public objServEntFinan: any;
  public titulo: string;
  private _utile: utiles;

  constructor(
    private _serv_financieros: serv_financieros,
    private _route:ActivatedRoute
  ) {
    this.titulo = 'Editar Servicio Financiero';
    this.objServEntFinan = { ID_SERVICIO_FINANCIERO: 0, NOMBRE_SERV_FINAN: "" ,DESCRIPCION:""}
    this._utile = new utiles();
  }

  ngOnInit(): void {
    this._route.params.subscribe(paramsID=>{
      let {id}=paramsID;
      this.get_servicio_Finan(id);
    });


  }

  onSubmit(form) {
    this._serv_financieros.editServicioFinan(this.objServEntFinan).subscribe(
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

  get_servicio_Finan(id) {
    this._serv_financieros.getServicioFinanciero(id).subscribe(
      response => {
        this.objServEntFinan=response[0];
      },
      error => {
        console.log('error en getServicioFinan ='+error);
      }
    );
  }

}// fin de clase
