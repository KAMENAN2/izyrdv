export class CodeGen {
    private id ;
    private message ;
    private numero ;
    private codeGene;

    constructor(id, message, numero, codeGene) {
        this.id = id;
        this.message = message;
        this.numero = numero;
        this.codeGene = codeGene;
    }


    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getMessage() {
        return this.message;
    }

    setMessage(value) {
        this.message = value;
    }

    getNumero() {
        return this.numero;
    }

    setNumero(value) {
        this.numero = value;
    }

    getCodeGene() {
        return this.codeGene;
    }

    setCodeGene(value) {
        this.codeGene = value;
    }
}