import getAdressFromCep from './getAdressFromCep.js'

describe('When the requisition is fulfilled, the function returns the expected data', () => {
  it('returns an object', async () => {
    await expect(typeof getAdressFromCep('04208-002')).toBe('object')
  });
  it('returns an object with keys logradouro, bairro and uf', async () => {
    const adress = await getAdressFromCep('04208-002');
    expect(adress).toHaveProperty('logradouro', 'Rua Silva Bueno');
    expect(adress).toHaveProperty('bairro', 'Ipiranga');
    expect(adress).toHaveProperty('uf', 'SP');
  });
  it('returns accepts prompts with or without hifen', async () => {
    const adress = await getAdressFromCep('04208-002');
    const secondAdress = await getAdressFromCep('04208002');
    expect(adress).toEqual(secondAdress);
  });
})


describe('When the requisition is rejected, the function returns the expected error', () => {
  it('throws the error message “Você precisa passar um CEP” if empty CEP is given', async () => {
    await expect(getAdressFromCep()).rejects.toThrow()
    await expect(getAdressFromCep()).rejects.toThrow(new Error('Você precisa passar um CEP'))
  });
  it('throws the error message “Você precisa passar um CEP” if invalid CEP is given', async () => {
    await expect(getAdressFromCep('00000-0000')).rejects.toThrow();
    await expect(getAdressFromCep('00000-00')).rejects.toThrow();
    await expect(getAdressFromCep('XXXXX-XXX')).rejects.toThrow();
  });
})

