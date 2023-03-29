const removeItem = require('./exercises1');

describe('Testa a remoção de item de array', () => {
  it('verifies if removeItem([1, 2, 3, 4], 3) returns expected array', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];', () => {
expect(removeItem([1, 2, 3, 4], 3)).not.toEqual('[1, 2, 3, 4]')
  });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});
