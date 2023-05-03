// const primeNumbers = [17, 23, 37];

// const sum = (a, b) => {
//   // console.log(a + b);
// };
// const [first, second, third] = primeNumbers;
// sum(first, third); // 54

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // const array = [];
// // array.push(comida, animal, bebida);
// // [animal, bebida, comida] = array;

// // console.log([comida, animal, bebida]);
// // let xablau = [comida, animal, bebida];
// // console.log(xablau);
// [comida, animal, xablau] = [bebida, comida, animal]

// // console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [, , , ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`
// console.log(numbers);

const getNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: "João",
  lastName: "Jr II",
};

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian",
};

console.log(getNationality(otherPerson)); // Ivan is Russian
const { nationality = 'Brazilian'} = person
// console.log(getNationality(({ firstName, lastName, nationality = "Brazilian" } = person)))
  console.log(getNationality(person));

console.log(nationality);
console.log(person);


const position2d = [1.0, 2.0];
const [x, y, z = 0, w = 10] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0
// console.log(w); // 0


const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian
console.log(person); // { name: 'João', lastName: 'Jr', age: 34 }


const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));


const greeting = (user = 'Marcos') => console.log(`Welcome, ${user}!`);

greeting(); // Welcome undefined!
greeting('João'); // Welcome undefined!


const multiply = (number = 1, value = 1) => number * value;

console.log(multiply());
console.log(multiply(8));
console.log(multiply(8, 2));

const object = {
  key1: 1,
  key2: 2,
};

const test = () =>  ({ ...object, key1: 'a', key1: 'b' });

console.log(test());
console.log(object);