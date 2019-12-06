export class Societe {
    private nomSociete: any;
    private telSocite: any;
    private emailSociete: any;
    private siteWeb: any;


    constructor(nomSociete: any, telSocite: any, emailSociete: any, siteWeb: any) {
        this.nomSociete = nomSociete;
        this.telSocite = telSocite;
        this.emailSociete = emailSociete;
        this.siteWeb = siteWeb;
    }


    getNomSociete(): any {
        return this.nomSociete;
    }

    setNomSociete(value: any) {
        this.nomSociete = value;
    }

    getTelSocite(): any {
        return this.telSocite;
    }

    setTelSocite(value: any) {
        this.telSocite = value;
    }

    getEmailSociete(): any {
        return this.emailSociete;
    }

    set EmailSociete(value: any) {
        this.emailSociete = value;
    }

    getSiteWeb(): any {
        return this.siteWeb;
    }

    setSiteWeb(value: any) {
        this.siteWeb = value;
    }
}