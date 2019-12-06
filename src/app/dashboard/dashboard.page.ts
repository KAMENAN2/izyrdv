import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public route:Router,private loadingController:LoadingController) { }

  ngOnInit() {
  }

    onClickRdv() {
      this.presentLoading1();

    }
  //-------------------- Loading Component in RDV page-----------
  async presentLoading1() {
    const loading = await this.loadingController.create({
      message: 'Connexion...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.route.navigateByUrl("/home");
  }
//

  async presentLoading2() {
    const loading = await this.loadingController.create({
      message: 'Chargement RDV...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.route.navigateByUrl("/list-rdv");
  }
//


    onClickListRdv() {
      this.presentLoading2();
    }
}
