import { Component, OnInit } from '@angular/core';
import {cate_servi_financiero_Service  } from '../../../servicio/Cate_servi_financiero.service';

@Component({
  selector: 'app-ent-finan',
  templateUrl: './ent-finan.component.html',
  styleUrls: ['./ent-finan.component.css'],
  providers:[cate_servi_financiero_Service]
})
export class EntFinanComponent implements OnInit {

  public arrCate_Ent_Finan:any;
  public pageActual:number;
  constructor(
    private _cate_servi_financiero:cate_servi_financiero_Service
  ) { }

  ngOnInit(): void {
    this.cargarCate();

  }

  cargarCate(){
    this._cate_servi_financiero.getServicioFinancieros().subscribe(
      response=>{
        this.arrCate_Ent_Finan=response;
      },
      err=>{
        console.log('error en carga de datos :'+err);
      }
    );
  }
}