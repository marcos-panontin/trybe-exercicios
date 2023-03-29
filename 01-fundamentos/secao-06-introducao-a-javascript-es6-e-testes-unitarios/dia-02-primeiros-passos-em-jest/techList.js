const techList = (array, name) => {
  if (array.length < 1) {
    return 'Vazio!';
  }
  const organizedArray = [];
  array.sort().forEach((item) => {
    organizedArray.push({ tech: item, name });
  });
  return organizedArray;
};

module.exports = techList;
