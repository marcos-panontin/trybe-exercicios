function userInfo() {
    var userEmail = "maria@email.com";

    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}

userInfo();
console.log(userEmail);

if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
}
console.log(userAge); // 20

// let userName = 'Isabella';
// let userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

const userInfo = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com",
};

userInfo.name = "João";

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

const estudante = {
    nome: "Maria",
    idade: 23,
};

estudante.idade = 24;

console.log(estudante);

age = 20;

let age;

console.log(age); // 20

const name = printName("Lucas");

function printName(name) {
    const myName = name;
    return myName;
}

console.log(name);

const checkTernary = (age) =>
    age >= 18
        ? `Você tem idade para dirigir!`
        : `Você ainda não tem idade para dirigir...`;

console.log(checkTernary(19));

let idade = 22;
console.log(idade >= 18 && "String uhuu");


//🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
        console.log("Idade dentro do for:", idade);
    }
}
imprimeIdade();

//🚀 Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.

  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }

pessoa.nome = 'Luna';
pessoa.idade = 19;

 // Altere essa estrutura para corrigir o erro.
  console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);
  

//🚀 Modifique a variável para que não ocorra Erro.


  let favoriteFood = "Lasanha";
  favoriteFood = "Hambúrguer";
console.log(favoriteFood);
  
//🚀 Modifique as concatenações para template literals.

  const name = "Adriana";
  const lastName = "Soares";
console.log(`Olá, ${name} ${lastName}!`);
  
  function soma(a, b) {
      let resultado = a + b;
      return resultado;
  }
  let a = 3;
  let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é ${soma(a, b)}.`);
  

//🚀 Transforme a função numeroAleatorio em uma arrow function.

//   function numeroAleatorio() {
//       return Math.random();
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();
  
console.log(numeroAleatorio); // DÁ ERRADO. PRECISA DOS PARÊNTESES
console.log(numeroAleatorio());

  
//DÚVIDA ---- NO CASO, numeroAleatorio é uma variável ou função? Com typeof, aparece FUNÇÃO, mas eu declarei como variável.


//🚀 Transforme a função hello em uma arrow function.

//   function hello(nome) {
//       return `Olá, ${nome}!`;
//   }
//   let nome = "Ivan";
// console.log(hello(nome));
  
const hello = (nome) => `Olá, ${nome}!`;

let nome = "Ivan";
console.log(hello(nome));

//🚀 Transforme a função nomeCompleto em uma arrow function.

//   function nomeCompleto(nome, sobrenome) {
//       return `${nome} ${sobrenome}`;
//   }
//   let nome = "Ivan";
//   let sobrenome = "Pires";
// console.log(nomeCompleto(nome, sobrenome));

  
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;

  let nome = "Ivan";
  let sobrenome = "Pires";
console.log(nomeCompleto(nome, sobrenome));


//🚀 Altere a expressão if/else utilizando ternary operator.

//   let speed = 90;
//   const speedCar = (speed) => {
//     if (speed >= 120) {
//       return `Você ultrapassou o limite de velocidade`;
//     } else {
//       return `Você está na velocidade permitida`;
//     }
//   };
// console.log(speedCar(speed));
  

// let speed = 90;
// const speedCar = (speed) => speed >= 120 ?  `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
// console.log(speedCar(speed));
  

let speed = 90;
function speedCar(speed) {
  return speed >= 120 ?
    `Você ultrapassou o limite de velocidade` :
    `Você está na velocidade permitida`;
};

console.log(speedCar(speed));