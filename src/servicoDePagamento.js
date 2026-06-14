export class ServicoDePagamento {
  #pagamentos; //Propridade privada

  constructor() { // Primeiro método a ser executado quando usar a classe
    this.#pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) { //Método
    this.#pagamentos.push({
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
    });
  }

  consultarUltimoPagamento() {
    return this.#pagamentos.at(-1);
  }
}
