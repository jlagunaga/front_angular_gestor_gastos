import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { url } from '../servicio/global'


@Injectable({
  providedIn: 'root'
})
export class cateInsumoService {
    public _url:string;
    constructor(
        private _http: HttpClient,
      ) {
        this._url= url;
      }

      getCateInsumos():Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this._url + 'cate_insumo', { headers: hedears })  
      }

      getCateInsumoAsID(id:number):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this._url + 'cate_insumo/'+id, { headers: hedears })  
      }

      saveCateInsumo(objCateInsumo):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type','application/json');
        let params = JSON.stringify(objCateInsumo);
        return this._http.post(this._url + 'cate_insumo',params, { headers: hedears });
      }

      editCateInsumo(objCateInsumo):Observable<any>{
        let hedears = new HttpHeaders().set('Content-Type','application/json');
        let params = JSON.stringify(objCateInsumo);
        return this._http.put(this._url + 'cate_insumo/'+objCateInsumo.ID_CAT_INSUMO,params, { headers: hedears });
      }

}// fin de clase 