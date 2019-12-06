import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authentcateTest: boolean;
  public token: string;
  public tokenSaved: string;
  //public host0 = "https://izyrdv.herokuapp.com/";
    public host0 = "http://localhost:8080/";
  //public host = "http://192.168.8.102:8080/";

 //public host = "https://izyrdv.herokuapp.com/";

  constructor(public alertCtrl: AlertController,
              public loadingController: LoadingController,
              public http:HttpClient) { }

  //--------------------- Login Alert ----------------------


  //-------------------- Loading Component in RDV page-----------
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'RDV Connexion...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
// ------------------------END Loading Component in RDV page ---------------



  public loadToken(){
    this.tokenSaved = localStorage.getItem("rdvToken");
    if(this.tokenSaved =="Azerty123"){

      this.authentcateTest = true;
    } else {
      this.authentcateTest = false;
    }
    return this.authentcateTest;
  }

  public onGetEmploye(url){

    return this.http.get<any>(this.host0+url);
  }
}
