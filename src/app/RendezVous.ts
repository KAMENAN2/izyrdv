
export class RendezVous {
    private id;
    private dateRdv;
    private heureRdv;
    private dureeRdv;
    private objetRdv;
    private codeGene;
    private descriptionRdv;
    private lieuRdv;
    private statut;
    private statutColor;
    private statutName;




    constructor(id, dateRdv, heureRdv, dureeRdv, objetRdv, codeGene, descriptionRdv, lieuRdv, statut, statutColor ,statutName) {
        this.id = id;
        this.dateRdv = dateRdv;
        this.heureRdv = heureRdv;
        this.dureeRdv = dureeRdv;
        this.objetRdv = objetRdv;
        this.codeGene = codeGene;
        this.descriptionRdv = descriptionRdv;
        this.lieuRdv = lieuRdv;
        this.statut = statut;
        this.statutColor = statutColor;
        this.statutName = statutName;
    }

    getObjetRdv() {
        return this.objetRdv;
    }

    setObjetRdv(value) {
        this.objetRdv = value;
    }

    getDescriptionRdv() {
        return this.descriptionRdv;
    }

    setDescriptionRdv(value) {
        this.descriptionRdv = value;
    }

    getLieuRdv() {
        return this.lieuRdv;
    }

    setLieuRdv(value) {
        this.lieuRdv = value;
    }


    getDateRdv() {
        return this.dateRdv;
    }

    setDateRdv(value) {
        this.dateRdv = value;
    }

    getStatutColor() {
        return this.statutColor;
    }

    setStatutColor(value) {
        this.statutColor = value;
    }

    getStatutName() {
        return this.statutName;
    }

    setStatutName(value) {
        this.statutName = value;
    }

    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getHeureRdv() {
        return this.heureRdv;
    }

    setHeureRdv(value) {
        this.heureRdv = value;
    }

    getDureeRdv() {
        return this.dureeRdv;
    }

    setDureeRdv(value) {
        this.dureeRdv = value;
    }


    getCodeGene() {
        return this.codeGene;
    }

    setCodeGene(value) {
        this.codeGene = value;
    }

    getStatut() {
        return this.statut;
    }

    setStatut(value) {
        this.statut = value;
    }
}