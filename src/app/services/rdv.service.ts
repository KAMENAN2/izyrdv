import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RdvService {
    //public host = "https://izyrdv.herokuapp.com/";
    //public host0 = "http://192.168.8.102:8080/";
    public host0 = "http://localhost:8080/";

  constructor(public http : HttpClient) { }

  public onGetRdv(url){

     return  this.http.get<any>(this.host0+url) ;
  }
  public onPostRdv(url,body){

     return  this.http.post<any>(this.host0+url,body) ;
  }
  public onPostVisiteur(url,body){

     return  this.http.post<any>(this.host0+url,body) ;
  }
  public onPostSociete(url,body){

     return  this.http.post<any>(this.host0+url,body) ;
  }

  public onPostSmsCode(url,msg){
      return  this.http.post<any>(this.host0+url,msg) ;
  }

  public onGetLastId(url){
      return  this.http.get(this.host0+url);
  }

  public onPutRelationShipRdvEmp(url,body){

      return this.http.put(this.host0+url,body,{headers : new HttpHeaders({ 'Content-Type': 'text/uri-list' })});
  }
  public onPutRelationShipRdvVisit(url,body){

      return this.http.put(this.host0+url,body,{headers : new HttpHeaders({ 'Content-Type': 'text/uri-list' })});
  }
  public onPutRelationShipVisitSoci(url,body){

      return this.http.put(this.host0+url,body,{headers : new HttpHeaders({ 'Content-Type': 'text/uri-list' })});
  }

  public onPutRdvEmploye(url,body){

      return this.http.put(this.host0+url,body,{headers : new HttpHeaders({ 'Content-Type': 'text/uri-list' })});
  }

    public onGetAllElts(url){
        let host = this.host0;
        return this.http.get<any>(url);
    }
}
