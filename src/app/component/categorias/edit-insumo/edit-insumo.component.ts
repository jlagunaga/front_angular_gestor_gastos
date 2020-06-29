import { Component, OnInit } from '@angular/core';
import { cateInsumoService } from '../../../servicio/insumo.service';
import { Router, ActivatedRoute } from '@angular/router'


declare var $: any;
@Component({
  selector: 'app-edit-insumo',
  templateUrl: '../new-insumo/new-insumo.component.html',
  styleUrls: ['./edit-insumo.component.css'],
  providers: [cateInsumoService]
})
export class EditInsumoComponent implements OnInit {
  public titulo: string;
  public objCate_Insumo: any;
  private alerta: string;
  private Error: string;
  private idInsumo;

  constructor(
    private _cateInsumoService: cateInsumoService,
    private _activateRoute: ActivatedRoute,
    private _route:Router) {
    this.titulo = "Editar Categoria Insumo";
    this.objCate_Insumo = { ID_CAT_INSUMO: 0, NOMBRE_INSUMO: "", DESCRIPCION: "" };
  }

  ngOnInit(): void {
    this.generar_Alertas()
    this._activateRoute.params.subscribe(idParams => {
      let { id } = idParams;
      this.idInsumo = id;
      this.obtener_Insumo(this.idInsumo);
    });
  }

  onSubmit(form) {
    this._cateInsumoService.editCateInsumo(this.objCate_Insumo).subscribe(
      response => {
        this._route.navigate(['/cate-insumo']);
      }, error => {
        $('#alerta').append(this.Error);
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

    this.Error = `<div class="alert alert-danger" role="alert">
    Error al modificar
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>`;
  }

  obtener_Insumo(id: number) {
    this._cateInsumoService.getCateInsumoAsID(id).subscribe(
      response => {
        this.objCate_Insumo = response[0];
        console.log('prueba' + this.objCate_Insumo);
      },
      error => {
        console.log('Error Get insumo = ' + error);

      }
    );
  }


}// fin de clase
