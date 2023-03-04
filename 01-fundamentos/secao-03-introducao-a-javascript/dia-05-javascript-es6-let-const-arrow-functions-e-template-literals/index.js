// function userInfo() {
//     var userEmail = "maria@email.com";

//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
// }

// userInfo();
// // console.log(userEmail);

// if (true) {
//     // inicio do escopo do if
//     var userAge = "20";
//     console.log(userAge); // 20
//     // fim do escopo do if
// }
// console.log(userAge); // 20

// // let userName = 'Isabella';
// // let userName = 'Lucas';
// // console.log(userName); // Resultado: Lucas

// const favoriteLanguage = "Javascript";
// favoriteLanguage = "Python";
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = "Machine learning";
// favoriteTechnology = "Facial recognition";
// console.log(favoriteTechnology); // Facial recognition

// const userInfo = {
//     name: "Cláudio",
//     id: "5489-2",
//     email: "claudio@email.com",
// };

// userInfo.name = "João";

// console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// const estudante = {
//     nome: "Maria",
//     idade: 23,
// };

// estudante.idade = 24;

// console.log(estudante);

// age = 20;

// let age;

// console.log(age); // 20

// const name = printName("Lucas");

// function printName(name) {
//     const myName = name;
//     return myName;
// }

// console.log(name);

// const checkTernary = (age) =>
//     age >= 18
//         ? `Você tem idade para dirigir!`
//         : `Você ainda não tem idade para dirigir...`;

// console.log(checkTernary(19));

// let idade = 22;
// console.log(idade >= 18 && "String uhuu");

// //🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//         console.log("Idade dentro do for:", idade);
//     }
// }
// imprimeIdade();

// //🚀 Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.

//   // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }

// pessoa.nome = 'Luna';
// pessoa.idade = 19;

//  // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

// //🚀 Modifique a variável para que não ocorra Erro.

//   let favoriteFood = "Lasanha";
//   favoriteFood = "Hambúrguer";
// console.log(favoriteFood);

// //🚀 Modifique as concatenações para template literals.

//   const name = "Adriana";
//   const lastName = "Soares";
// console.log(`Olá, ${name} ${lastName}!`);

//   function soma(a, b) {
//       let resultado = a + b;
//       return resultado;
//   }
//   let a = 3;
//   let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é ${soma(a, b)}.`);

// //🚀 Transforme a função numeroAleatorio em uma arrow function.

// //   function numeroAleatorio() {
// //       return Math.random();
// //   }
// //   console.log(numeroAleatorio());

// const numeroAleatorio = () => Math.random();

// // console.log(numeroAleatorio); // DÁ ERRADO. PRECISA DOS PARÊNTESES
// // console.log(numeroAleatorio());

// //DÚVIDA ---- NO CASO, numeroAleatorio é uma variável ou função? Com typeof, aparece FUNÇÃO, mas eu declarei como variável.

// //🚀 Transforme a função hello em uma arrow function.

// //   function hello(nome) {
// //       return `Olá, ${nome}!`;
// //   }
// //   let nome = "Ivan";
// // console.log(hello(nome));

// const hello = (nome) => `Olá, ${nome}!`;

// let nome = "Ivan";
// // console.log(hello(nome));

// //🚀 Transforme a função nomeCompleto em uma arrow function.

// //   function nomeCompleto(nome, sobrenome) {
// //       return `${nome} ${sobrenome}`;
// //   }
// //   let nome = "Ivan";
// //   let sobrenome = "Pires";
// // console.log(nomeCompleto(nome, sobrenome));

// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

//   let nome = "Ivan";
//   let sobrenome = "Pires";
// // console.log(nomeCompleto(nome, sobrenome));

// //🚀 Altere a expressão if/else utilizando ternary operator.

// //   let speed = 90;
// //   const speedCar = (speed) => {
// //     if (speed >= 120) {
// //       return `Você ultrapassou o limite de velocidade`;
// //     } else {
// //       return `Você está na velocidade permitida`;
// //     }
// //   };
// // console.log(speedCar(speed));

// // let speed = 90;
// // const speedCar = (speed) => speed >= 120 ?  `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
// // console.log(speedCar(speed));

// let speed = 90;
// function speedCar(speed) {
//   return speed >= 120 ?
//     `Você ultrapassou o limite de velocidade` :
//     `Você está na velocidade permitida`;
// };

// console.log(speedCar(speed));

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

// O nome da função deverá ser substituaX.
// A função deverá receber um nome por parâmetro.
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.
// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

// Exemplo:
// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, por exemplo para separar as palavras de um texto.

function substituaX(name) {
    const phrase = "Tryber x aqui exatamente!";
    return phrase.replaceAll(" x ", name);
}

// console.log(substituaX(' Bebeto '));

// Função 2: Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills.
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro.
// Declare dentro da função uma variável com o nome skills e do tipo const.
// A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

//   const skills = ["HTML", "CSS", "JavaScript"];

// function minhasSkills (initialString, skills) {
//   return `${initialString}
//   My ${skills.length} main skills are:
//   ${skills[0]}
//   ${skills[1]}
//   ${skills[2]}
//   `
// }

// console.log(minhasSkills(substituaX(' Bebeto '), skills));

//Exercício 1
// (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para facilitar a consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados, por exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno estiver à esquerda de um número maior que ele, ele deverá ser subtraído, por exemplo: IX = 10 - 1 = 9.

const equivalenceBetweenNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

// CONVERTING ROMAN NUMERALS INTO ARRAY OF ARABIC NUMBERS USING MAP METHOD
function romanToArabic(string) {
  const array = string.split("");
    return array.map(function (item) {

        for (let miniArray of Object.entries(equivalenceBetweenNumerals)) {
            if (miniArray.includes(item)) {
                return miniArray[1];
            }
        }
    })
}

function calculatingSum(arabicArray) {
  let sum = 0;
  for (let index = 0; index < arabicArray.length; index += 1) {
      if (arabicArray[index] < arabicArray[index + 1]) {
          sum -= arabicArray[index];
      } else if (arabicArray[index] >= arabicArray[index + 1] || index === arabicArray.length - 1) {
          sum += arabicArray[index];
      }
  }
  return sum;
}

// console.log(calculatingSum(romanToArabic("ID")));


// //Exercício 2
// Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.

// Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.

let vector = [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
];

function arrayOfNumbers(vector) {
  const evenNumbersArray = [];
  for (let array of vector) {
    for (let item of array) {
      item % 2 === 0 && evenNumbersArray.push(item);
    }
  }
  return evenNumbersArray;  
}

// console.log(arrayOfNumbers(vector));


// //🚀 Exercício 3
// Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

let basket = [
    "Melancia",
    "Abacate",
    "Melancia",
    "Melancia",
    "Uva",
    "Laranja",
    "Jaca",
    "Pera",
    "Melancia",
    "Uva",
    "Laranja",
    "Melancia",
    "Banana",
    "Uva",
    "Pera",
    "Abacate",
    "Laranja",
    "Abacate",
    "Banana",
    "Melancia",
    "Laranja",
    "Laranja",
    "Jaca",
    "Uva",
    "Banana",
    "Uva",
    "Laranja",
    "Pera",
    "Melancia",
    "Uva",
    "Jaca",
    "Banana",
    "Pera",
    "Abacate",
    "Melancia",
    "Melancia",
    "Laranja",
    "Pera",
    "Banana",
    "Jaca",
    "Laranja",
    "Melancia",
    "Abacate",
    "Abacate",
    "Pera",
    "Melancia",
    "Banana",
    "Banana",
    "Abacate",
    "Uva",
    "Laranja",
    "Banana",
    "Abacate",
    "Uva",
    "Uva",
    "Abacate",
    "Abacate",
    "Melancia",
    "Uva",
    "Jaca",
    "Uva",
    "Banana",
    "Abacate",
    "Banana",
    "Uva",
    "Banana",
    "Laranja",
    "Laranja",
    "Jaca",
    "Jaca",
    "Abacate",
    "Jaca",
    "Laranja",
    "Melancia",
    "Pera",
    "Jaca",
    "Melancia",
    "Uva",
    "Abacate",
    "Jaca",
    "Jaca",
    "Abacate",
    "Uva",
    "Laranja",
    "Pera",
    "Melancia",
    "Jaca",
    "Pera",
    "Laranja",
    "Jaca",
    "Pera",
    "Melancia",
    "Jaca",
    "Banana",
    "Laranja",
    "Jaca",
    "Banana",
    "Pera",
    "Abacate",
    "Uva",
];

const fruitsCount = {};

function count(list, countObject) {

    for (let item of list) {
      if (!Object.keys(countObject).includes(item)) {
          countObject[item] = 1;
      } else {
          countObject[item] += 1;
      }
  }

}
count(basket, fruitsCount)

const keysArray = Object.keys(fruitsCount);
const valuesArray = Object.values(fruitsCount);

let message = '';
for (let index = 0; index < keysArray.length; index += 1) {
  message += `${valuesArray[index]} ${keysArray[index]}s, `
}
  
console.log('Sua cesta possui: ' + message);