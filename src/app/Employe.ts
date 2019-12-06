export class Employe {
    private id ;
    private matricule;
    private nom ;
    private prenom ;
    private telBuro;
    private telPerso;
    private email ;
    private username;
    private password;

    constructor(id, matricule, nom, prenom, telBuro, telPerso, email, username, password) {
        this.id = id;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.telBuro = telBuro;
        this.telPerso = telPerso;
        this.email = email;
        this.username = username;
        this.password = password;
    }


    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getMatricule() {
        return this.matricule;
    }

    setMatricule(value) {
        this.matricule = value;
    }

    getNom() {
        return this.nom;
    }

    setNom(value) {
        this.nom = value;
    }

    getPrenom() {
        return this.prenom;
    }

    setPrenom(value) {
        this.prenom = value;
    }

    getTelBuro() {
        return this.telBuro;
    }

    setTelBuro(value) {
        this.telBuro = value;
    }

    getTelPerso() {
        return this.telPerso;
    }

    setTelPerso(value) {
        this.telPerso = value;
    }

    getEmail() {
        return this.email;
    }

    setEmail(value) {
        this.email = value;
    }

    getUsername() {
        return this.username;
    }

    setUsername(value) {
        this.username = value;
    }

    getPassword() {
        return this.password;
    }

    setPassword(value) {
        this.password = value;
    }
}