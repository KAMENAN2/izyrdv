import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModalrdvmodifService {
  //public host = "https://izyrdv.herokuapp.com/";
  //public host0 = "http://192.168.8.102:8080/";
  public host0 = "http://localhost:8080/";
  constructor(public http : HttpClient) { }

  public onPutVisiteur(url,body) {

    return this.http.put(this.host0 + url, body);
  }
  public onPutRdv(url,body) {

    return this.http.put(this.host0 + url, body);
  }
  public onPutSociete(url,body) {

    return this.http.put(this.host0 + url, body);
  }

}
