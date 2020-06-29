import { Component, OnInit } from '@angular/core';
import { cate_Tienda_Service } from '../../../servicio/cate_tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  providers: [cate_Tienda_Service]
})
export class TiendaComponent implements OnInit {

  public pageActual: number
  public arrCateTiendaService: any[];

  constructor(
    private _cate_Tienda_Service: cate_Tienda_Service
  ) {

  }

  ngOnInit(): void {
    this.getAllCateTienda();
  }

  getAllCateTienda() {
    this._cate_Tienda_Service.getCateTiendas().subscribe(
      response => {
        if (response.length > 0) {
          this.arrCateTiendaService=response
        }
      },
      error => {
        console.log('error Carga Cate Tienda ' + error);

      }
    );
  }

}// fin de clase
