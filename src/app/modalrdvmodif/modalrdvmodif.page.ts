import { Component, OnInit,Input } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ModalrdvmodifService} from "../services/modalrdvmodif.service";
import {RendezVous} from "../RendezVous";
import {Visiteur} from "../Visiteur";
declare var $: any;

@Component({
  selector: 'app-modalrdvmodif',
  templateUrl: './modalrdvmodif.page.html',
  styleUrls: ['./modalrdvmodif.page.scss'],
})
export class ModalrdvmodifPage implements OnInit {
  @Input()  public data: any;
  public rdvData: any;
  public rdvVisiteur: any;
  choix: boolean;
  private dinner: any;
  private societe: any;

  constructor(private modalController: ModalController,private modardvmodifservice: ModalrdvmodifService) { }

  ngOnInit() {
    console.log(this.data);
    this.rdvData = this.data.rdv;
    this.rdvVisiteur = this.data.visiteur;
    this.societe = this.data.societe;
  }
  async closeModal() {
    await this.modalController.dismiss(this.dinner);
  }

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

//

  onSaveRDV(value: any) {
    console.log("Visiteur:")
    console.log(this.rdvVisiteur);
    this.modardvmodifservice.onPutRdv("rendezVouses/"+this.rdvData.id, this.rdvData).subscribe(
        data => {
          console.log(data)
        },error => {
          console.log(error);
        });
    this.modardvmodifservice.onPutVisiteur("visiteurs/"+this.rdvVisiteur.id, this.rdvVisiteur).subscribe(
        data => {
          console.log(data)
        },error => {
          console.log(error);
        });

    if(this.societe){
      this.modardvmodifservice.onPutSociete("societes/"+this.societe.id, this.societe).subscribe(
          data => {
            console.log(data)
          },error => {
            console.log(error);
          });
    }


  }
}
