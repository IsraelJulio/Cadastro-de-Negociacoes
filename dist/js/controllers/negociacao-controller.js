import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    Adiciona() {
        var entity = this.CriarNegociacao();
        this.negociacoes.adicionaNegociacao(entity);
        this.limparFormulario();
        console.log(this.negociacoes.list());
    }
    CriarNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
