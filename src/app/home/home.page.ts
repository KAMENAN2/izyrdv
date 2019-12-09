import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController, Platform} from "@ionic/angular";
import {AuthService} from "../services/auth.service";
import {DatePicker} from "@ionic-native/date-picker/ngx";
import {RdvService} from "../services/rdv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {State} from "@angular-devkit/architect/src/progress-schema";
import {Employe} from "../Employe";
import {Visiteur} from "../Visiteur";
import {Societe} from "../Societe";




declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public choix: boolean;
  public rdv: any;
  public progress =0;
  public authentcateTest: boolean;
  public token: string;
  public employe: any;
  public emp : Employe;
  public visiteur : Visiteur;
  public societe:Societe;
  public employeRdv: any;

  constructor(public alertCtrl: AlertController,
              public loadingController: LoadingController,
              public auth:AuthService,
              private datePicker: DatePicker,
              public rdvService:RdvService,
              public route: Router,
              public activateRoute:ActivatedRoute,
              private platform:Platform) {}

    ngOnInit(): void {
      console.log(this.codeGen(5,localStorage.getItem("employeID")));

      this.onGetEmp();
        this.authanticate();
        this.onGetAllRdv();
    }


    public authanticate(){
      let test =this.auth.loadToken();
      if(test){
        console.log("Login Ok");

      }else {
        this.showPrompt();
      }
     }


//-------------------------RDV Save Function for RDV page--------------------
    onSaveRDV(value: any){




      console.log(value);
      //----------------------- Make toast ------------------------------

     /* this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
      ); */
      //----------------------- Make toast ------------------------------

      this.route.navigateByUrl("rdv",{state:value});


    }

//------------------------- END RDV Save Function for RDV page--------------------



//--------------------------- RDV check Type RDV form ------------------------------
  checkValue($event: CustomEvent) {
    console.log($event.detail.value);
    if($event.detail.value == "P"){
      this.choix = true;
      console.log(this.choix);
      setTimeout(function(){

        $('#addform').hide();

        $('#addform').show(1500);
      }, 200);


    }else {
      this.choix =false;
      console.log(this.choix);
    }
  }

//---------------------------END RDV check Type in RDV form ------------------------------

//----------------------- Natif date piker -----------------------------------------------
  onShowDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
        date => console.log('Got date: ', date),
        err => console.log('Error occurred while getting date: ', err)
    );
  }
  //-----------------------END Natif date piker -----------------------------------------------

    public onGetAllRdv(){
      this.rdvService.onGetRdv("rendezVouses").subscribe(
          data  =>{
              this.rdv = data._embedded.rendezVouses[0];
              //this.rdv.codeGene = "12345";
            console.log(this.rdv);
          },error => {
              console.log(error);
          }
      )

    }
    public codeGen(length,id){
      let code = "RDV-"+id
      let caractere = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let caractereLength = caractere.length;

      for ( var i = 0; i < length; i++ ) {
        code += caractere.charAt(Math.floor(Math.random() * caractereLength));
      }
      return code ;
    }

  async showPrompt() {
    const prompt = await this.alertCtrl.create({
      header: 'Login',
      message: 'Connexion espace RDV',
      cssClass : 'alert',

      inputs: [
        {

          name: 'username',
          type: 'text',
          placeholder: 'Username'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Fermer',
          handler: data => {
            this.showPrompt();
              navigator['app'].exitApp();

          //this.showPrompt();

          }
        },
        {
          text: 'Login',
          handler: data => {

            console.log(data);
            console.log("login Methode Start")
            let test = this.authentcated(data.username,data.password);
              if(test){
                console.log("login Ok")
              }else{
                console.log("login Not Ok")
                this.showPrompt();
              }
            console.log(test);
            console.log("login Methode end")
            this.auth.presentLoading();
          }
        }
      ]
    });
    await prompt.present();
  }
//-----------Top prgressbar loader --------------
  onProgress() {
    if (!(this.progress == 0.5)) {
      this.progress += 0.1;
    }
  }


  // ------------------- Authentification login ((
  public authentcated(username:String,password:String){

    console.log(" Out Boucle for ")

    if(this.employe){
      let employe = Object.values(this.employe);
      let key = employe.length;
      console.log(employe);
      for (var i = 0; i < this.employe.length ;i++){
        console.log("In Boucle for ")
        if(username == this.employe[i].username  && password ==this.employe[i].password){

          //this.employeRdv = this.employe[i];
          localStorage.setItem("employeID",this.employe[i].id);
          localStorage.setItem("nomEmploye",this.employe[i].nom);
          localStorage.setItem("prenomEmploye",this.employe[i].prenom);

          this.authentcateTest = true;
          this.token = "Azerty123";
          localStorage.setItem("rdvToken",this.token);
          console.log("Token saved");
          break;
        }else {
          this.authentcateTest = false;
          //this.showPrompt();

        }
      }
    }else {
      this.authentcateTest = false;
      this.onGetEmp();
    }



    return this.authentcateTest;

    }

    public onGetEmp(){

        this.auth.onGetEmploye("employes").subscribe(
            data =>{
              this.employe = data._embedded.employes ;
              console.log(this.employe);
            }
        )}

      }
