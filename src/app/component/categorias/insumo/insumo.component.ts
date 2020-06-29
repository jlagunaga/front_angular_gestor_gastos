import { Component, OnInit } from '@angular/core';
import { cateInsumoService} from '../../../servicio/insumo.service'



@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css'],
  providers:[cateInsumoService]
})
export class InsumoComponent implements OnInit {
  public arrCate_Insumo: any[];
  public pageActual:number;
  constructor(
    private _usuarioService:cateInsumoService
  ) { }

  ngOnInit(): void {
    this.cargarCate();

  }

  cargarCate(){
    this._usuarioService.getCateInsumos().subscribe(
      response=>{
        this.arrCate_Insumo=response;
      },
      err=>{
        console.log(err);
      }
    );
  }

}// fin de clase 
