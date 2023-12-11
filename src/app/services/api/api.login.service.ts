import { Injectable } from '@angular/core';
import {loginInterface} from '../../modelos/loginInterface';
import {responseInterface} from '../../modelos/responseInterface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

   url:string ="http://127.0.0.1:8000/api";
  //url:string ="https://inventapp.diplomadoisucomfamiliar.net/api";
  constructor(private http:HttpClient) { }


 loginByEmail(form:loginInterface):Observable<responseInterface>
  {
     let direccion =this.url+ "/login";
     return this.http.post<responseInterface>(direccion,form);
  }
   
 



}
