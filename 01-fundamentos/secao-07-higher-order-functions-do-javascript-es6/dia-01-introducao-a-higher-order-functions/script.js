const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const divisibleByThreeAndFive = numbers.find((item) => {
  return item % 3 === 0 && item % 5 === 0;
});

// console.log(divisibleByThreeAndFive);

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
// const nameFound = names.find((name) => name.length >= 5);
// console.log(nameFound);

const musicas = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

// Adicione seu código aqui
const foundMusic = musicas.find((item) => item.id === "31031685");
// console.log(foundMusic);

const listNames = ["Maria", "Manuela", "Jorge", "Ricardo", "Wilson", "Xyb"];

const verifyFirstLetter = (letter, names) =>
  names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('X', listNames)); // false

// const grades = {
//   portugues: "Aprovado",
//   matematica: "Reprovado",
//   ingles: "Aprovado",
// };

// const verifyGrades = Object.values(grades).every(
//   (grade) => grade === "Aprovado"
// ); // false

// console.log(verifyGrades);

const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna", "Pedro"];

const hasName = (arr, name) => {
  return arr.some((item) => item === name);
};

// console.log(hasName(names, "Ana"));
// console.log(hasName(names, "Pedro"));

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

const isAboveThreshold = (element, age) => {
  return element.age >= age;
};

const verifyAges = (arr, age) => {
  const isEverybodyAbove = arr.every((element) =>
    isAboveThreshold(element, age)
  );
  return isEverybodyAbove;
};

// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));

const pessoas = [
  { nome: "Joana", idade: 37 },
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 32 },
  { nome: "Aline", idade: 28 },
];

// pessoas.forEach((person) => console.log(person));

// console.log(pessoas.find((person) => person.nome.length === 3));
// console.log(pessoas.find((person) => person.nome.length === 7));

const generateEmail = (name) => {
  const nameItems = name.split(' ');
  let email = '';
  for (let index = 0; index < nameItems.length; index += 1) {
    if (index === nameItems.length - 1) {
      email += nameItems[index].toLowerCase() + "@trybe.com";
    } else {
      email += nameItems[index].toLowerCase() + "_"
    }
  }
  return {name, email};
}

// console.log(generateEmail('Marcos Pan'));

const newEmployees = (callbackFunction) => {
  const employees = {
    id1: callbackFunction("Pedro Guerra"),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callbackFunction("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callbackFunction("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

// console.log(newEmployees(generateEmail))



// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// const randomNumber = () => {
//   return Math.floor(Math.random() * 6)
// }

// const lotteryResult = (numeroApostado, callbackFunction) => {
//   let message = 'Tente novamente';
//   if (numeroApostado === callbackFunction()) {
//   message = "Parabéns, você ganhou";
//   } 
//   return message;
// }

// console.log(lotteryResult(4, randomNumber));


const checkWin = (numeroApostado, chosenNumber) => {
  if (chosenNumber === numeroApostado) {
    return "Parabéns, você ganhou";
  } else {
    return `Tente novamente`;
  }
};

const lotteryResult = (numeroApostado, callbackFunction) => {

  const chosenNumber = Math.floor(Math.random() * 6);
  return callbackFunction(numeroApostado, chosenNumber);
}

// console.log(lotteryResult(4, checkWin));


// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];
const STUDENT_ANSWERS2 = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];

const checkCorrectAnswers = (solutionsArray, studentAnswersArray, callbackFunction) => {

  return callbackFunction(solutionsArray, studentAnswersArray);
}

const compareAnswers = (solutionsArray, studentAnswersArray) => {
  let score = 0;
  for (let index = 0; index < solutionsArray.length; index += 1) {
    if (solutionsArray[index] === studentAnswersArray[index]) {
      score += 1;
    } else if (studentAnswersArray[index] !== "N.A.") {
      score -= 0.5;
    }
  }
  return score;
}

// console.log(checkCorrectAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
// console.log(checkCorrectAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS2, compareAnswers));


