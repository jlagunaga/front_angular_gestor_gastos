import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { url } from '../servicio/global'

@Injectable({
    providedIn: 'root'
})
export class cate_Tienda_Service {
    public _url;
    constructor(
        private _http: HttpClient
    ) {
        this._url = url;
    }

    getCateTiendas(): Observable<any> {
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this._url + 'cate_tienda', { headers: hedears })
    }

    getCateTienda(id): Observable<any> {
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this._url + 'cate_tienda/' + id, { headers: hedears })
    }

    saveCateTienda(objCateTienda):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        let params= JSON.stringify(objCateTienda);
        return this._http.post (this._url + 'cate_tienda', params,{ headers: hedears })
    }

    editCateTienda(objCateTienda):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type', 'application/json');
        let params= JSON.stringify(objCateTienda);
        return this._http.put (this._url + 'cate_tienda/'+objCateTienda.ID_CAT_TIENDA, params,{ headers: hedears })
    }


}// fin de clase service