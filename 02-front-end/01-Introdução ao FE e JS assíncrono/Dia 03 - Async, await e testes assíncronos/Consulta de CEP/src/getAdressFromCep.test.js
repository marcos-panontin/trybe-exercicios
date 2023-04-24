import getAdressFromCep from './getAdressFromCep.js'

// Quando a requisição é bem sucedida, ela deverá retornar os dados esperados.
// Os dados devem ser retornados em um objeto;

describe('When the requisition is fulfilled, the function returns the expected data', () => {
  it('returns an object', async () => {
    await expect(typeof getAdressFromCep()).toBe('object')
  })
})
// O objeto deve, obrigatoriamente, possuir as chaves logradouro, bairro e uf;
// A função deverá aceitar cep com hífen (”30130-010”) ou sem hífen (”30130010”).
// Quando a requisição é rejeitada, ela deverá retornar os erros esperados.
// Ao passar um cep vazio, a aplicação deverá lançar um erro com a seguinte mensagem: “Você precisa passar um CEP”.
// Ao passar um cep inválido, a aplicação deverá lançar um erro genérico.

