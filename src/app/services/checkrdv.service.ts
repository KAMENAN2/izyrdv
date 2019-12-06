import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckrdvService {
 private host : String ="http://localhost:8080/";
  //public host = "http://192.168.8.102:8080/";

  constructor(private http:HttpClient) { }

  public onGetAllElts(url){
    let host = this.host;
    return this.http.get<any>(url);
  }

  public onSaveStatuts(url,body){
    return this.http.post(this.host+url,body);
  }
}
