import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganisationServiceService implements OnInit{
  private host: String ="http://localhost:8080";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
  public onSaveOrganisation(url,data){
    let host = this.host;
    return this.http.post(host+url,data);
  }
  public onOrganisationGet(url){
    let host = this.host;
    return this.http.get(host+url);
  }
  public onGetOrganisation(url){
    let host = this.host;
    return this.http.get(host+url);
  }
  public onPutOrganisation(url,body){
    let host = this.host;
    return this.http.put(this.host+url,body,{headers : new HttpHeaders({ 'Content-Type': 'text/uri-list' })});
  }
}
