import { Component, OnInit } from '@angular/core';
import { serv_financieros } from '../../../servicio/serv_financieros.service'

declare var $:any;

@Component({
  selector: 'app-serv-finan',
  templateUrl: './serv-finan.component.html',
  styleUrls: ['./serv-finan.component.css'],
  providers:[serv_financieros]
})
export class ServFinanComponent implements OnInit {

  public arrServFinan:any;
  public pageActual:number;
  constructor(
    private _serv_financieros:serv_financieros
  ) { }

  ngOnInit(): void {
    this.cargarCate();

  }

  cargarCate(){
    this._serv_financieros.getServicioFinancieros().subscribe(
      response=>{
        this.arrServFinan=response;
      },
      err=>{
        console.log('error en carga de datos :'+err);
      }
    );
  }

}// fin de clase
