import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OrganisationServiceService} from './services/organisation-service.service';
import {NgxSpinnerService} from 'ngx-spinner';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'izy-RDV-Front-V1';
  organisation: String = "org_02";
  countDomainUrl:String = "/organisations";
  private totalOrganisation: any;
  private totalOrg: any;
  error: boolean = false;
  private orgData: any;

constructor(private orgService : OrganisationServiceService,private spinner: NgxSpinnerService){


}

  ngOnInit(): void {
    // @ts-ignore

this.onGetOrganisation();


    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });

     // console.log(this.totalOrg);
    });
    //this.getDomainCount(this.countDomainUrl);
  }
  onSaveOrganisation(value: any) {

    console.log(value);
    this.spinner.show();
    this.orgService.onSaveOrganisation("/organisations",value)
      .subscribe(data =>{

        console.log(data);
        this.spinner.hide();
        //console.log("Nombre de Organisation dans la base :"+this.getDomainCount())

      },error =>{
        this.spinner.hide();
        console.log(error);
      });

    $('#exampleModal').modal('hide');
  }

  onGetOrganisation(){
  this.orgService.onOrganisationGet("/organisations")
    .subscribe(data =>{

      this.totalOrg = this.totalOrganisation = data ;

      $(document).ready(function () {

        $('#exampleModal').modal('show');
        // console.log(this.totalOrg);
      });
    },error => {
      console.log(error);
    })
  }

  ngAfterViewInit(): void {

  }


}
