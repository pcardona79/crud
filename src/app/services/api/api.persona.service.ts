import { Injectable } from '@angular/core';
import {personaInterface} from '../../modelos/personaInterface';
import {responsePInterface} from '../../modelos/responsePInterface';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiPersonaService {

   //url:string =" localhost:8000/api";
  //url:string ="https://inventapp.diplomadoisucomfamiliar.net/api";
  url:string="https://backend-laravel.diplomadoisucomfamiliar.net/api";
  constructor(private http:HttpClient) { }


 addPersona(form:personaInterface):Observable<responsePInterface>
  {
     let direccion =this.url+ "/v1/personas";
     return this.http.post<responsePInterface>(direccion,form);
  }
   
  editPersona(id: number,form:personaInterface):Observable<responsePInterface>
  {
     let direccion =this.url+ "/v1/personas/${id}";
     return this.http.post<responsePInterface>(direccion,form);
  }


     /* método para listar todas las personas*/
     getPersona():Observable<any>
     {
        let direccion =this.url+ "/v1/personas";
        return this.http.get(direccion);
     }
 

     

}
