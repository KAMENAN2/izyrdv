import { Component, OnInit } from '@angular/core';
import {Visiteur} from "../Visiteur";
import {Societe} from "../Societe";
import {Employe} from "../Employe";
import {RendezVous} from "../RendezVous";
import {RdvService} from "../services/rdv.service";
import {CodeGen} from "../CodeGen";

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.page.html',
  styleUrls: ['./rdv.page.scss'],
})
export class RdvPage implements OnInit {
    public progress = 0.5;
    public rdv:any;
    public visiteur : Visiteur;
    public societe:Societe;
    public rendezVous : RendezVous;
    public employeRdv: Employe;
    public employe: any;
    public massage: string;
    public codeGene : CodeGen;
    private code: string;
    public rdvId: any;
    public societeId : any;
    public visiteurId : any;

  constructor(private rdvservice: RdvService ) { }

  ngOnInit() {
    this.rdv = history.state;
    //this.employe = history.state[1];
    console.log(history.state);
/*
    this.employeRdv = new Employe(null,
                                    this.employe.matricule,
                                    this.employe.nom,
                                    this.employe.prenom,
                                    this.employe.telBuro,
                                    this.employe.telPerso,
                                    this.employe.email,
                                    this.employe.username,
                                    this.employe.password); */

      //----------add atribut value in visiteur object --------
      this.visiteur= new Visiteur (null,this.rdv.nom,this.rdv .prenom,
                                  this.rdv .telBuro,
                                  this.rdv .telPerso,this.rdv .email,
                                  this.rdv .typeVisite,
                                  this.rdv .genre);

      //----------add atribut value in socity object --------

      this.societe = new Societe(this.rdv .nomSociete,
                                  this.rdv .telSocite,
                                  this.rdv .emailSociete,
                                  this.rdv .siteWeb);
      //   this.visiteur.prenom(this.rdv .prenom) ;
      //   this.visiteur.telPerso(this.rdv .telPerso) ;
      //   this.visiteur.telBuro(this.rdv .telBuro);
      //   this.visiteur.email(this.rdv .email) ;
      //   this.visiteur.typeVisite(this.rdv .typeVisite) ;
      //   this.visiteur.genre(this.rdv .genre);
      //   this.visiteur.telPerso(this.rdv .telPerso) ;
      //
      // this.societe.nomSociete(this.rdv .nomSociete) ;
      // this.societe.telSocite(this.rdv .telSocite) ;
      // this.societe.emailSociete(this.rdv .emailSociete) ;
      // this.societe.siteWeb(this.rdv .siteWeb) ;
      console.log("Visiteur :")
      console.log(this.visiteur);
      console.log("Employé ID :")
      console.log(localStorage.getItem("employeID"));

  }



//--------------------- Save RDV parte 2 ------------
    onSaveRDV(value: any) {
/*
  let rdvKeys = Object.keys(this.rdv);
  let rdvValues = Object.values(this.rdv);
  let elts = rdvKeys.length;
      console.log(rdvKeys);
      console.log(elts);
  for(var i = 0;i <= elts;i++)
  {
    console.log("ok");
    value[rdvKeys[i]] = rdvValues[i];
  } */

//--------------- Add attribute to Rendez-vous object -------------------
this.rendezVous = new RendezVous(null,value.dateRdv,
                                    value.heureRdv,
                                    value.dureeRdv,
                                    value.objetRdv,value.codeGene,
                                    value.descriptionRdv,
                                    value.lieuRdv,4,"secondary","planifié");

this.rdvservice.onPostRdv("rendezVouses",this.rendezVous).subscribe(
    data =>{
        console.log("Rendez Vous Saved");
        console.log(data);
        //this.code =this.codeGen(5,localStorage.getItem("employeID"));

        //-------Save Visiteur object------------------------------------------
        this.rdvservice.onPostVisiteur("visiteurs",this.visiteur).subscribe(data =>{console.log(data);this.visiteurId = data.id;},error => {console.log(error)});
        //---------END save Visiteur object -----------------------------------

        //---------------Save Societe ---------------------------------
        this.rdvservice.onPostSociete("societes",this.societe).subscribe(data =>{console.log(data); this.societeId = data.id},error => {console.log(error)});
        //--------------END Save societe ------------------------------

        //---------------------------------Last id Recup to update code in back end ---------------------
        this.rdvservice.onGetLastId("rendezVouses/search/finMaxId").subscribe(
            data =>{
                console.log("Last insert Id")
                console.log(data);
                this.rdvId = data
                //let rdvId = this.rendezVous.getId();

                //------------RDV SMS construction-------------------
                this.code =this.codeGen(5,data);
                this.rdvId= data;
                this.massage = "RDV\nDe:"
                    +this.visiteur.getNom()+" "
                    +this.visiteur.getPrenom()+"\nAvec:"
                    +localStorage.getItem("nomEmploye")+" "
                    +localStorage.getItem("prenomEmploye")+"\nVisitée\nLe :"
                    +this.rendezVous.getDateRdv()+"\nLieu :"
                    +this.rendezVous.getLieuRdv()+" \nCode Rdv:"+this.code;
                //---------------END RDV SMS construction --------------------

                this.codeGene = new CodeGen(data,this.massage,this.visiteur.getTelPerso(),this.code); //Class object witch contain Rdv_Id,the visitor message and code

                console.log("Message :");
                console.log(this.massage);
                console.log("Visiteur Id");
                console.log(this.visiteurId);

                this.rdvservice.onPostSmsCode("codegen",this.codeGene).subscribe( //Http function for object codgene sending
                    data =>{
                        console.log("data saved")
                        console.log(data);


                    },error => {
                        console.log(error)
                    }
                )

                //------------RelationShip Maker Rendez-vous -->Employe ----------------------------------
               // let rdv ="http://localhost:8080/rendezVouses/"+data.toString()

                let rdvEmploye2 ="http://localhost:8080/employes/"+localStorage.getItem("employeID");//data = rdvId || this.rdvId
                console.log(typeof(rdvEmploye2) );
                let rdvEmploye1 = "rendezVouses/"+this.rdvId+"/employe";
                console.log(rdvEmploye1);
                this.rdvservice.onPutRelationShipRdvEmp(rdvEmploye1,rdvEmploye2).subscribe(
                    data =>{
                        console.log("RDV-Employe RelationShip saved");
                        console.log(data);
                        //--------------------RelationShip Visiteur --> Rendez-vous --------------------------
                        let visiteurRdv2 = "http://localhost:8080/visiteurs/"+this.visiteurId;
                        let visiteurRdv1 = "rendezVouses/"+this.rdvId+"/visiteur";

                        this.rdvservice.onPutRelationShipRdvVisit(visiteurRdv1,visiteurRdv2).subscribe(data =>{console.log("RDV-visiteur RelationShip saved");console.log(data)},error => {console.log(error)});
                        //--------------------END RelationShip Visiteur --> Rendez-vous --------------------------

                    },error => {
                        console.log(error);
                    }
                )

                //--------------------END Relation Maker Rendez-vous -->Employe ------------------------




                //--------------------RelationShip Visiteur --> Societe --------------------------
                let visiteurSociete1 ="visiteurs/"+this.visiteurId+"/societe";
                let visiteurSociete2 = "http://localhost:8080/societes/"+this.societeId;
                this.rdvservice.onPutRelationShipVisitSoci(visiteurSociete1,visiteurSociete2).subscribe(data =>{console.log("Societé-visiteur RelationShip saved");console.log(data)},error => {console.log(error)});
                //--------------------END RelationShip Visiteur --> Societe --------------------------
            }
        )

//---------------------------------END Last id Recup to update code in back end ---------------------

    },error => {
        console.log(error);
    }
)
      console.log(value);
        console.log("Rendez Vous Object");
        console.log(this.rendezVous);

    }

//-----------------END RDV save parte 2 ---------------------


// ------ Top progessbar loader
    onProgress(number: number) {

          this.progress += number;
  }



  //----Automatical code generation ------
    public codeGen(length,id){
        let code = "RDV-"+id
        let caractere = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let caractereLength = caractere.length;

        for ( var i = 0; i < length; i++ ) {
            code += caractere.charAt(Math.floor(Math.random() * caractereLength));
        }
        return code ;
    }
}
