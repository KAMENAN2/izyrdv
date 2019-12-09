import {Injectable, OnInit} from '@angular/core';
import {OrganisationServiceService} from './organisation-service.service';
import {HttpClient} from '@angular/common/http';
import {Departement} from '../models/departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService implements OnInit{
  private host: String ="http://localhost:8080";

  constructor(private orgService:OrganisationServiceService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  public onSaveDepartement(url,data){
    let host = this.host;
    return this.http.post<Departement>(host+url,data);
  }

  public onGetDepartement(url){
    let host = this.host ;

    return  this.http.get<Departement>(host+url);

  }


}
