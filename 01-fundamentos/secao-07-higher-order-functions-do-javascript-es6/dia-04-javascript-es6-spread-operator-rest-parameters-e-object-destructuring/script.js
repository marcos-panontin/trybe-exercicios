// // // // array original
// // // const items = ["Camiseta", "Carregador", "Chinelo"];

// // // // nova variável
// // // const newItems = [...items, 'Meia', 'Cadarço'];

// // // // console.log(newItems);
// // // // console.log(items);


// // // const spring = ["OUT", "NOV", "DEZ"];
// // // const summer = ["JAN", "FEV", "MAR"];
// // // const fall = ["ABR", "MAI", "JUN"];
// // // const winter = ["JUL", "AGO", "SET"];

// // // // const months = [...summer, ...fall, ...winter, ...spring];
// // // const months = summer.concat(fall, winter, spring)
// // // // console.log(months);


// // // const product = {
// // //   id: 1,
// // //   name: "Camiseta",
// // //   style: {
// // //     color: 'black',
// // //     sizes: ['p', 'm', 'g']
// // //   }
// // // };


// // // const productPrice = {
// // //   price: 23,
// // // };

// // // const newProduct = { ...product, style: {...product.style, property: 'blue' } };
// // // // console.log(newProduct);


// // // const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
// // // console.log(...randomNumbers);


// // // // Faça uma lista com as suas frutas favoritas
// // // const specialFruit = ['banana', 'manga', 'kiwi'];

// // // // Faça uma lista de complementos que você gostaria de adicionar
// // // const additionalItens = ['aveia', 'leite condensado', 'iogurte'];

// // // const fruitSalad = (fruit, additional) => [...fruit, ...additional];

// // // console.log(fruitSalad(specialFruit, additionalItens));

// // // const countParams = (...args) => {
// // //   console.log('parâmetros:', args);
// // //   return `Você passou ${args.length} parâmetros para a função.`;
// // // }

// // // // // console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// // // // // console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


// // // // const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// // // // // console.log(sum(4, 7, 8, 9, 60)); // 88

// // // // function sum(...numbers) {
// // // //   // console.log(numbers);
// // // //   return numbers.reduce((accumulator, current) => accumulator + current, 0);
// // // // }

// // // // sum(1, 2, 3); // 6
// // // // sum(1, 2, 3, 4, 5); // 15
// // // // sum(1, 2); // 3


// // // const product = {
// // //   name: "Smart TV Crystal UHD",
// // //   price: "1899.05",
// // //   seller: "Casas de Minas",
// // // };


// // // const { name, price } = product;
// // // // const name = product.name
// // // console.log(name); // Smart TV Crystal UHD


// // // definindo o objeto
// // const character = {
// //   name: 'Luke SkyWalker',
// //   age: '53',
// //   description: {
// //     specieName: 'Human',
// //     jedi: false,
// //   },
// //   homeWorld: {
// //     name: 'Tatooine',
// //     population: '200000',
// //   },
// // };

// // const {
// //   name,
// //   age,
// //   homeWorld: { name: planetName },
// //   description: {jedi, specieName},
// // } = character;

// // console.log(`${name}, ${age} years old, is a ${specieName} ${jedi ? 'jedi' : 'non-jedi'} from ${planetName}.`);





// // const daysOfWeek = {
// //   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
// //   weekend: ['Saturday', 'Sunday'],
// // };

// // // const { workDays, weekend } = daysOfWeek


// // const weekdays = [...daysOfWeek.workDays, ...daysOfWeek.weekend];

// // console.log(weekdays);


// // const student = {
// //   a: 'Maria',
// //   b: 'Turma B',
// //   c: 'Matematica',
// // };

// // // const { a, b, c } = student;
// // const { a: name, b: classAssigned, c: subject, d: grade } = student;

// // // console.log(a, b, c);
// // console.log(name); // Maria
// // console.log(classAssigned); // Turma B
// // console.log(subject); // Matemática
// // console.log(grade);


// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };


// const { name, price, seller } = product;

// console.log(name);
// product.name = 'ahha'
// console.log(name);

// console.log(product);
// console.log(price);


// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// console.log(numbers);



const user = {
  name: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const completeInfoUser = { ...user, ...jobInfos };

const { name, age, nationality, profession, squad, squadInitials } = completeInfoUser;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I am ${nationality}. I work as a ${profession} and my squad is ${squadInitials} ${squad}.`);


const user = {
  name: "Maria",
  age: 21,
};

let { name } = user;
name = 'Xablau'

console.log(name); // Xablau
console.log(user); // { name: 'Maria', age: 21 }
