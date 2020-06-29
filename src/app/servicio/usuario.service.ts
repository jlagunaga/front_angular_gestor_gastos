import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Usuarios } from '../models/usuario'
import { url } from '../servicio/global'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public objurl: string;

  constructor(
    private _http: HttpClient
  ) {
    this.objurl = url;
  }

  getUsuarios(): Observable<any> {
    let hedears = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.objurl + 'usuarios', { headers: hedears })
  }

  getUsuario(id): Observable<any> {
    let hedears = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.objurl+'usuarios/'+id,{headers:hedears});
  }

  saveUsuario(objUsuario:Usuarios): Observable<any> {
    let params = JSON.stringify(objUsuario);
    let hedears = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.objurl+'usuarios/',params,{headers:hedears});
  }

  editUsuario(objUsuario:Usuarios): Observable<any> {
    let params = JSON.stringify(objUsuario);
    let hedears = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.objurl+'usuarios/'+objUsuario.ID_USUARIO,params,{headers:hedears});
  }

  desactivarUsuario(id):Observable<any>{
    let hedears = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.objurl+'usuario-desac/'+id,{headers:hedears});
  }

// subir fotos
	makeFileRequest(url: string,  files: Array<File>, name: string){
		return new Promise(function(resolve, reject){
			var formData:any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append(name, files[i], files[i].name);
      }
      
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url, true);
			xhr.send(formData);
		});
	}



}// fin de clase 
