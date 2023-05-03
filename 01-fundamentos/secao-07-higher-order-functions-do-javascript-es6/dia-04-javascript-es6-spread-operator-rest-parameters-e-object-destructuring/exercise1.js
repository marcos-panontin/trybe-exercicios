//Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  // console.log(rectangleArea(...rectangle));
});

//Exercício 2
// Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

const sum = (...args) =>
  args.reduce((partialResult, currentValue) => partialResult + currentValue);

// console.log(sum(1, 2, 3, 4));

//Exercício 3
// Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:

// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: "Alex",
  age: 26,
  likes: ["fly fishing"],
  nationality: "Australian",
};

const gunnar = {
  name: "Gunnar",
  age: 30,
  likes: ["hiking", "scuba diving", "taking pictures"],
  nationality: "Icelandic",
};

// complete a assinatura da função abaixo
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>
const personLikes = (person) =>
  `${person.name} tem ${person.age} anos e gosta de ${person.likes.join(
    ", "
  )}.`;
const personLikes2 = ({ name, age, likes }) =>
  `${name} tem ${age} anos e gosta de ${likes.join(", ")}.`;

// Retornos esperados:
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
console.log(personLikes2(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes2(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//Exercício 4
// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Australian",
  },
  {
    name: "John",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Peter",
    bornIn: 1900,
    nationality: "Australian",
  },
];

// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const filterPeople = (arr) => {
  return people.filter(({ nationality, bornIn }) => {
    return nationality === "Australian" && bornIn > 1900 && bornIn <= 2000;
  });
};

// console.log(filterPeople(people));


// Exercício 5

const ships = [
  {
    name: "Titanic",
    length: 269.1,
    measurementUnit: "meters",
  },
  {
    name: "Queen Mary 2",
    length: 345,
    measurementUnit: "meters",
  },
  {
    name: "Yamato",
    length: 256,
    measurementUnit: "meters",
  },
  // measurementUnit: unidade de medida
];

const convertMeasurements = (number, desiredMeasurementUnit) => {
  if (desiredMeasurementUnit === 'feet') {
  return number * 3.281;
  } else {
    return number;
}

};

const shipLength = ({ name, length, measurementUnit }, desiredMeasurementUnit) => {
  
const length2 = convertMeasurements(length, desiredMeasurementUnit).toFixed(0);

  return `${name} is ${length2} ${desiredMeasurementUnit}${desiredMeasurementUnit === 'meter' ? 's' :
 ''} long.`;
}


// retorno esperado
console.log(shipLength(ships[1], 'feet')); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[1], 'meter')); // 
// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:



//Exercício 6
// O objeto yearSeasons representa as estações do ano. Cada chave do objeto é uma estação, e o valor de cada chave é um array de strings que representa os meses daquela estação. A partir desse objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const yearMonths = [...spring, ...summer, ...autumn, ...winter];
console.log(yearMonths);
// yearSeasons: estações do ano.
