export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(entity) {
        this.negociacoes.push(entity);
    }
    list() {
        return this.negociacoes;
    }
}
