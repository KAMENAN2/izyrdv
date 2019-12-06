export class Visiteur {
    private id :any;
    private nom : any;
    private prenom : any;
    private telBuro : any;
    private telPerso : any;
    private email : any;
    private typeVisite : any;
    private genre: any;


    constructor(id: any, nom: any, prenom: any, telBuro: any, telPerso: any, email: any, typeVisite: any, genre: any) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.telBuro = telBuro;
        this.telPerso = telPerso;
        this.email = email;
        this.typeVisite = typeVisite;
        this.genre = genre;
    }

    getId(): any {
        return this.id;
    }

    setId(value: any) {
        this.id = value;
    }

    getNom(): any {
        return this.nom;
    }

    setNom(value: any) {
        this.nom = value;
    }

    getPrenom(): any {
        return this.prenom;
    }

    setPrenom(value: any) {
        this.prenom = value;
    }

    getTelBuro(): any {
        return this.telBuro;
    }

    setTelBuro(value: any) {
        this.telBuro = value;
    }

    getTelPerso(): any {
        return this.telPerso;
    }

    setTelPerso(value: any) {
        this.telPerso = value;
    }

    getEmail(): any {
        return this.email;
    }

    setEmail(value: any) {
        this.email = value;
    }

    getTypeVisite(): any {
        return this.typeVisite;
    }

    setTypeVisite(value: any) {
        this.typeVisite = value;
    }

    getGenre(): any {
        return this.genre;
    }

    setGenre(value: any) {
        this.genre = value;
    }
}