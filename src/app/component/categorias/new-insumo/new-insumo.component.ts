import { Component, OnInit } from '@angular/core';
import { cateInsumoService } from '../../../servicio/insumo.service';

declare var $:any;
@Component({
  selector: 'app-new-insumo',
  templateUrl: './new-insumo.component.html',
  styleUrls: ['./new-insumo.component.css'],
  providers:[cateInsumoService]
})
export class NewInsumoComponent implements OnInit {
  public titulo:string;
  public objCate_Insumo:any;
  private alerta:string;
  private Error:string;

  constructor(private _cateInsumoService:cateInsumoService) { 
    this.titulo="Nueva Categoria Insumo";
    this.objCate_Insumo={ID_CAT_INSUMO:0,NOMBRE_INSUMO:"", DESCRIPCION:""};
  }

  ngOnInit(): void {
    this.generar_Alertas()

  }
  

  onSubmit(form){
    this._cateInsumoService.saveCateInsumo(this.objCate_Insumo).subscribe(
      response=>{
        $('#alerta').append(this.alerta);
        console.log(response);
        form.reset();
      },error=>{
        console.log(error);
      });
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

}// public 
