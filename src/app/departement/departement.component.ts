import { Component, OnInit } from '@angular/core';
import {OrganisationServiceService} from '../services/organisation-service.service';
import {DepartementService} from '../services/departement.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Departement} from '../models/departement.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  private orgData: any;
  private o : any;
  public form = {
    childSurName: null,
    childGender: null
  };
  private id: any;

  constructor(private orgService:OrganisationServiceService,
              private depService:DepartementService,
              private spinner: NgxSpinnerService,
              private route:Router) { }
  public data : any;
  departement: Departement;
  organisation: any;
  ngOnInit() {
    this.onGetOrganisation();
    console.log("OrgData :" + this.data);
    this.getDepartementList();
  }


  onSaveDepartement(data: any) {
    console.log(data);

    this.spinner.show();
    this.depService.onSaveDepartement("/departements",data)
      .subscribe(data =>{
        console.log(this.id);
        let bodyId = data.id;
        console.log("BodyId");
        console.log(bodyId);
        let body1 = "http://localhost:8080/organisations/"+this.id;
        //let body2 = "http://localhost:8080/departements/"+bodyId;

        this.orgService.onPutOrganisation("/departements/"+bodyId+"/organisation",body1).subscribe(
          res =>{
            console.log(res);
          },error => {
            console.log(error);
          })


        this.getDepartementList()
        this.spinner.hide();

        //console.log("Nombre de Organisation dans la base :"+this.getDomainCount())
      },error =>{
        this.spinner.hide();
        console.log(error);
      });

  }

  public onGetOrganisation(){

    this.orgService.onGetOrganisation("/organisations")
      .subscribe(data =>{

        this.organisation = <Departement> data;
        console.log(this.departement);
      },error => {
        console.log(error);
      });
  }

  //Get departement list

  public getDepartementList(){

    this.depService.onGetDepartement("/departements").subscribe(
      data =>{
        this.departement = data;
        console.log(data);
      }
    )

}

}
