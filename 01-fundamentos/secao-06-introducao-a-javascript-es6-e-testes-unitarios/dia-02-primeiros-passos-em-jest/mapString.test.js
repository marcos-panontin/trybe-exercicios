/* eslint-disable no-undef */
const { encode, decode } = require('./mapString');

describe('Testing decode and encode functions', () => {
  it('tests if both are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('tests vowel-number equivalences', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('tests number-vowel equivalences', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('tests if other letters are kept in both functions', () => {
    expect(encode('plkjhgfdscxzvbnmytrwq')).toBe('plkjhgfdscxzvbnmytrwq');
    expect(decode('plkjhgfdscxzvbnmytrwq')).toBe('plkjhgfdscxzvbnmytrwq');
  });
  it('tests if string length is kept', () => {
    const string = 'amor';
    expect(encode(string).length).toBe(string.length);
  });
});
