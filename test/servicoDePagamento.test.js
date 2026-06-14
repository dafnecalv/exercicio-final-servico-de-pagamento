import { ServicoDePagamento } from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Classe de Serviço de Pagamento', () => {
  it('Validar que se o valor do pagamento for maior que 100.00, a categoria deve ser "cara"', function () {
    
    //Arrange
    const servicoDePagamento = new ServicoDePagamento();

    //Act
    servicoDePagamento.pagar('0987-7656-3475', 'Sabesp', 150.00);
    const pagamentos = servicoDePagamento.consultarUltimoPagamento();
    pagamentos.categoria = pagamentos.valor > 100.00 ? 'cara' : 'padrão';

    //Assert
    assert.equal(pagamentos.codigoBarras, '0987-7656-3475');
    assert.equal(pagamentos.empresa, 'Sabesp');
    assert.equal(pagamentos.valor, 150.00);
    assert.equal(pagamentos.categoria, 'cara');
  });
  it('Validar que se o valor do pagamento for menor que 100.00, a categoria deve ser "padrão"', function () {
    //Arrange
    const servicoDePagamento = new ServicoDePagamento();

    //Act
    servicoDePagamento.pagar('0987-7656-3475', 'Enel', 50.00);
    const pagamentos = servicoDePagamento.consultarUltimoPagamento();
    pagamentos.categoria = pagamentos.valor > 100.00 ? 'cara' : 'padrão';

    //Assert
    assert.equal(pagamentos.codigoBarras, '0987-7656-3475');
    assert.equal(pagamentos.empresa, 'Enel');
    assert.equal(pagamentos.valor, 50.00);
    assert.equal(pagamentos.categoria, 'padrão');
  });
});