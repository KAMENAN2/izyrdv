import { Component, OnInit } from '@angular/core';
import {CheckrdvService} from "../services/checkrdv.service";
import {Router} from "@angular/router";
import {AlertController, ModalController} from "@ionic/angular";
import {ModalrdvmodifPage} from "../modalrdvmodif/modalrdvmodif.page";

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
    private dismissData: any;
    private societe: any;
    private statut: number;
  constructor(private checkrdvservice : CheckrdvService,
              private route:Router,private modalController: ModalController,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.data_link = history.state;
    console.log(history.state);
    if (this.data_link.rendezVous) {
      console.log(this.data_link);

      this.checkrdvservice.onGetAllElts(this.data_link.rendezVous.href).subscribe(
          data => {
            this.rdvData = data;
            this.statut =this.rdvData.statut
              console.log(this.rdvData);
            this.checkrdvservice.onGetAllElts(this.data_link.visiteur.href).subscribe(
                  data => {
                      this.rdvVisiteur = data;
                      console.log(this.rdvVisiteur);
                      this.checkrdvservice.onGetAllElts(data._links.societe.href).subscribe(
                          data => {
                              this.societe = data;
                              console.log(this.societe);
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

                  }, error => {
                      console.log(error);
                  }
              );

          }, error => {
            console.log(error);
          }
      );


    }
  }

  onTerminate() {
    this.checkrdvservice.onSaveStatuts("save-rdv-status",{"id":this.rdvData.id,"status":2,"statutColor":"medium","statutName":"Terminer"}).subscribe(
        data =>{

          console.log("status saved");
          console.log(data);

        }

    );
    this.statut = 2;
    this.route.navigateByUrl("checkrdv");
  }

  //----------- Open Moda for RDV modification ----------------------
    async openModalWithData() {
        const modal = await this.modalController.create({
            component: ModalrdvmodifPage,
            componentProps: {
                data: {rdv : this.rdvData, visiteur :this.rdvVisiteur,societe:this.societe}

            }
        });
        modal.onWillDismiss().then(dataReturned => {
            // trigger when about to close the modal
            this.dismissData = dataReturned.data;
            console.log('Receive: ', this.dismissData);
        });
        return await modal.present().then(_ => {
            // triggered when opening the modal
            console.log('Sending: ', this.rdvData);
        });
    }
  //-----------END Open Moda for RDV modification ----------------------


  onCancel() {
        this.showConfirm();

  }




    async showConfirm() {
        const confirm = await this.alertCtrl.create({
            header: 'Confirmation',
            message: 'Confirmez-vous l annulation de ce rendez-vous ?',
            buttons: [
                {
                    text: 'Fermer',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Annuler',
                    handler: () => {
                        console.log('Confirm Okay.');
                        this.checkrdvservice.onSaveStatuts("save-rdv-status",{"id":this.rdvData.id,"status":5,"statutColor":"dark","statutName":"Annulé"}).subscribe(
                            data =>{

                                console.log("status saved");
                                console.log(data);

                            }
                        );
                        this.statut = 5 ;
                    }
                }
            ]
        });
        await confirm.present();
    }
}
