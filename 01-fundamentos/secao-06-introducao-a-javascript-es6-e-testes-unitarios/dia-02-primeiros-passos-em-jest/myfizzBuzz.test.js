const myFizzBuzz = require('./myfizzBuzz');

describe('Verifies fizzbuzz function', () => {
  it('checkes if num is divisible by 3 AND 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('checkes if num is divisible by ONLY 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('checkes if num is divisible ONLY 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('checkes if num is NOT divisible by 3 and 5', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('checkes if function returns false to non-numerical parameters', () => {
    expect(myFizzBuzz('8')).toBe(false);
  });
});
