import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { url } from './global'

@Injectable({
    providedIn: 'root'
})
export class cate_servi_financiero_Service {
    public _url;
    constructor(
        private _http: HttpClient
    ) {
        this._url = url;
    }

    getServicioFinancieros(){
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        console.log('API = '+ this._url + 'cate_ent_finan');
        return this._http.get (this._url + 'cate_ent_finan', { headers: hedears })
    }

    getServicioFinanciero(id){
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get (this._url + 'cate_ent_finan/'+id, { headers: hedears })
    }

    saveServicioFinan(objSerFinanciero):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        let params= JSON.stringify(objSerFinanciero);
        return this._http.post (this._url + 'cate_ent_finan', params,{ headers: hedears })
    }

    editServicioFinan(objSerFinanciero):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        let params= JSON.stringify(objSerFinanciero);
        return this._http.put (this._url + 'cate_ent_finan/'+objSerFinanciero.ID_CAT_FINANCIERA, params,{ headers: hedears })
    }


}// fin de carga