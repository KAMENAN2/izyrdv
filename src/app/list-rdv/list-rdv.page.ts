import { Component, OnInit } from '@angular/core';
import {RdvService} from "../services/rdv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.page.html',
  styleUrls: ['./list-rdv.page.scss'],
})
export class ListRdvPage implements OnInit {
  private rdvData: any;
    visible: number = 1;

  constructor(public rdvService:RdvService,private route : Router) { }

  ngOnInit() {


    this.rdvService.onGetRdv("employes/"+localStorage.getItem("employeID")+"/rendezVous").subscribe(
        data =>{
          console.log(data._embedded.rendezVouses);
          this.rdvData = data._embedded.rendezVouses ;
        }
    )
  }


    onGetRdvDetail(value: any) {
        this.route.navigateByUrl("checkrdv", {state:value});
    }
}
