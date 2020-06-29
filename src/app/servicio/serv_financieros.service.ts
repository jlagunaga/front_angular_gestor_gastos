import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { url } from './global'

@Injectable({
    providedIn: 'root'
})
export class serv_financieros {
    public _url;
    constructor(
        private _http: HttpClient
    ) {
        this._url = url;
    }
// :::::::::: Servicios Financieros ::::::::::::
    getServicioFinancieros(){
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get (this._url + 'servicio_finan', { headers: hedears })
    }

    getServicioFinanciero(id){
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get (this._url + 'servicio_finan/'+id, { headers: hedears })
    }

    saveServicioFinan(objServFinanciero):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        let params= JSON.stringify(objServFinanciero);
        return this._http.post (this._url + 'servicio_finan', params,{ headers: hedears })
    }

    editServicioFinan(objServFinanciero):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        let params= JSON.stringify(objServFinanciero);
        return this._http.put (this._url + 'servicio_finan/'+objServFinanciero.ID_SERVICIO_FINANCIERO, params,{ headers: hedears })
    }


}// fin de carga