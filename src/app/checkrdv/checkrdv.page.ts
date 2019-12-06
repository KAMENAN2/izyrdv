import { Component, OnInit } from '@angular/core';
import {CheckrdvService} from "../services/checkrdv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-checkrdv',
  templateUrl: './checkrdv.page.html',
  styleUrls: ['./checkrdv.page.scss'],
})
export class CheckrdvPage implements OnInit {
  private rdvData: any;
  private rdvEmploye: any;
  private rdvVisiteur: any;
  private data_link: any;
  constructor(private checkrdvservice : CheckrdvService,
              private route:Router) { }

  ngOnInit() {
    this.data_link = history.state;
    console.log(history.state);
    if (this.data_link.rendezVous) {
      console.log(this.data_link);

      this.checkrdvservice.onGetAllElts(this.data_link.rendezVous.href).subscribe(
          data => {
            this.rdvData = data;
            console.log(this.rdvData);
          }, error => {
            console.log(error);
          }
      );
      this.checkrdvservice.onGetAllElts(this.data_link.visiteur.href).subscribe(
          data => {
            this.rdvVisiteur = data;
            console.log(this.rdvVisiteur);
          }, error => {
            console.log(error);
          }
      );
      this.checkrdvservice.onGetAllElts(this.data_link.employe.href).subscribe(
          data => {
            this.rdvEmploye = data;
            console.log(this.rdvEmploye);
          }, error => {
            console.log(error);
          }
      );
    }
  }

  onTerminate() {
    this.checkrdvservice.onSaveStatuts("save-rdv-status",{"id":this.rdvData.id,"status":2,"statutColor":"medium","statutName":"terminer"}).subscribe(
        data =>{

          console.log("status saved");
          console.log(data);

        }
    );
    this.route.navigateByUrl("checkrdv");
  }

  onCancel() {

  }
}
