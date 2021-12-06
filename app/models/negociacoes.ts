import { Negociacao } from './negociacao.js';
export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adicionaNegociacao(entity: Negociacao) {
        this.negociacoes.push(entity);
    }
    list():ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}