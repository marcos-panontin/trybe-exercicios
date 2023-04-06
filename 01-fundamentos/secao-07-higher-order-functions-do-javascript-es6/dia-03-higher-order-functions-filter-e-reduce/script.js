// // const numbers = [1, 32, 44, 2, 3];

// // const totalSum = numbers.reduce((subtotal, atual) => {
// //   console.log(`valor do subtotal é ${subtotal} e o de atual é ${atual}`);
// //   // Iteração 1: valor do subtotal é 30 e o de atual é 1
// //   // Iteração 2:valor do subtotal é 31 e o de atual é 32
// //   // Iteração 3: valor do subtotal é 63 e o de atual é 44
// //   // Iteração 4: valor do subtotal é 107 e o de atual é 2
// //   // Iteração 5: valor do subtotal é 109 e o de atual é 3
// //   // Valor final de `subtotal`é 112 e `atual` para no 3

// //   return subtotal + atual;
// // }, 30); // O `valorInicial` é 30, ou seja, `subtotal` antes de executar a primeira iteração já está armazenando esse valor.

// // console.log(`valor final do subtotal é ${totalSum}`);
// // // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `subtotal` após cada uma das 5 iterações, tendo iniciado com valor 30.

// // const numbers = [50, 85, -30, 3, 15, 1, 32, 44, 2, 3, 123];

// // const biggestNumber = numbers.reduce((acc, curr) => curr > acc ? curr : acc)

// // console.log(biggestNumber);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const evenNumbersSum = evenNumbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// const evenNumbersSum2 = numbers.reduce(
//   (acc, curr) => (curr % 2 === 0 ? acc + curr : acc),
//   0
// );
// // console.log(evenNumbersSum);
// // console.log(evenNumbersSum2);

// const estudantes = [
//   {
//     nome: "Jorge",
//     sobrenome: "Silva",
//     idade: 14,
//     turno: "Manhã",
//     materias: [
//       { name: "Matemática", nota: 67 },
//       { name: "Português", nota: 79 },
//       { name: "Química", nota: 70 },
//       { name: "Biologia", nota: 65 },
//     ],
//   },
//   {
//     nome: "Mario",
//     sobrenome: "Ferreira",
//     idade: 15,
//     turno: "Tarde",
//     materias: [
//       { name: "Matemática", nota: 59 },
//       { name: "Português", nota: 80 },
//       { name: "Química", nota: 78 },
//       { name: "Biologia", nota: 92 },
//     ],
//   },
//   {
//     nome: "Jorge",
//     sobrenome: "Santos",
//     idade: 15,
//     turno: "Manhã",
//     materias: [
//       { name: "Matemática", nota: 76 },
//       { name: "Português", nota: 90 },
//       { name: "Química", nota: 70 },
//       { name: "Biologia", nota: 80 },
//     ],
//   },
//   {
//     nome: "Maria",
//     sobrenome: "Silveira",
//     idade: 14,
//     turno: "Manhã",
//     materias: [
//       { name: "Matemática", nota: 91 },
//       { name: "Português", nota: 85 },
//       { name: "Química", nota: 92 },
//       { name: "Biologia", nota: 90 },
//     ],
//   },
//   {
//     nome: "Natalia",
//     sobrenome: "Castro",
//     idade: 14,
//     turno: "Manhã",
//     materias: [
//       { name: "Matemática", nota: 70 },
//       { name: "Português", nota: 70 },
//       { name: "Química", nota: 60 },
//       { name: "Biologia", nota: 50 },
//     ],
//   },
//   {
//     nome: "Wilson",
//     sobrenome: "Martins",
//     idade: 14,
//     turno: "Manhã",
//     materias: [
//       { name: "Matemática", nota: 80 },
//       { name: "Português", nota: 82 },
//       { name: "Química", nota: 79 },
//       { name: "Biologia", nota: 75 },
//     ],
//   },
// ];

// const shortenedStudents = estudantes.map((item) => ({
//   nome: item.nome,
//   materia: item.materias.reduce((partialResult, currentValue) => {
//     if (currentValue.nota > partialResult.nota) {
//       return currentValue;
//     } else {
//       return partialResult;
//     }
//   }).name,
// }));

// console.log(shortenedStudents);



// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// const expectedResult = 120797034;
const getPopulation = () => countries.reduce((partialResult, currentValue) => currentValue.population + partialResult, 0);
// console.log(getPopulation());

// const expectedResult = 4311757;
const getTotalArea = () => countries.reduce((partialResult, currentValue) => currentValue.area + partialResult, 0);
// console.log(getTotalArea());


// const expectedResult = {
//   name: "American Samoa",
//   region: "Oceania",
//   currencies: [{ code: "USD", name: "United States Dollar" }],
//   capital: "Pago Pago",
//   population: 55197,
//   area: 199,
// };
const longestName = () => countries.reduce((partialResult, currentValue) => currentValue.name.length > partialResult.name.length ? currentValue : partialResult);

// console.log(longestName());

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];
// const expectedResult = 20;
const countA = () => names.reduce((partialResult, currentValue) => currentValue + partialResult).toLowerCase().split('').filter((letter) => letter === 'a').length;

// console.log(countA());

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  return students.map((student, index) => ({ name: student, average: grades[index].reduce((partialResult, currentValue) => partialResult + currentValue) / grades[index].length }))
}

