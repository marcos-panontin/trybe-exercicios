const hydrate = (string) => {
  const glassesNumber = string.match(/(\d[\d\.]*)/g).reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
  return `${glassesNumber} copo${glassesNumber > 1 ? 's' : ''} de água`;
};

console.log(hydrate('12 ovos e 3 aves'));

module.exports = hydrate;
