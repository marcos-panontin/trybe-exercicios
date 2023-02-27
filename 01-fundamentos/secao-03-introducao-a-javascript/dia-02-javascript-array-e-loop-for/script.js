// let tasksList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

// let indexOfTask = tasksList.indexOf("Brincar com o cachorro");
// console.log(indexOfTask);

// 1

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// menu.push("Contato")

// console.log(menu);

// let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

// for (let i = 0; i < groceryList.length; i += 1) {
//     console.log(groceryList[i])
// }

// let names = ["João", "Maria", "Antônio", "Margarida"];

// for (let item of names) {
//     console.log(item)
// }

// let arrOfNumbers = [10, 20, 30];
// for (let number of arrOfNumbers) {
//     let newNumber = number + 1;
//     console.log(newNumber)
// }

// 11
// 21
// 31

// let counter = 1;

// while (counter <= 50) {
//     counter += 1;
//     console.log(counter)
// }

// let d1 = Math.ceil(Math.random() * 6);
// console.log("D1 agora é:" + d1);

// let d2 = Math.ceil(Math.random() * 6);

// while (d1 !== d2) {
//     d2 = Math.ceil(Math.random() * 6);
//     console.log("D2 agora é:" + d2);
// }

// console.log("BINGO" + " d1: " + d1 + " d2: " + d2)


// let fruits = [3, 4, 10, 1, 12];
// let soma = 0;

// for (let number of fruits) {
//     soma += number;
//     console.log(typeof soma + "SOMA " + soma);
// }

// if (soma >= 16){
//     console.log(soma);
// } else {
//     console.log("VALOR MENOR QUE 16")
// }


// let numbers = [1, 2, 3];
// console.log(numbers.length)
// const xablau = numbers.indexOf("trybe");


// let n = ?;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);

// index = 0 | 100 - 0
// index = 1 | 100 - 1 = 99
// index = 2 | 99 - 2 = 97
// index = 3 | 97 - 3 = 94
// index = 4 | 94 - 4 =  90
// index = 5 | 90 - 5 = 85


/////////// EXERCÍCIOS PÓS-AULA

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let item of numbers) {
    sum += item;
}

const average = sum / numbers.length;

// console.log(average)

// if (average > 20) {
//     console.log("Média maior que 20")
// } else {
//     console.log("Média menor ou igual a 20")
// }

let largestNumber = 0;

for (let item of numbers) {
    if (item > largestNumber) {
        largestNumber = item;
    }
}

// console.log(largestNumber);

let oddNumbersQuantity = 0;

for (let item of numbers) {
    if (item % 2 !== 0) {
        oddNumbersQuantity += 1
    }
}
console.log(oddNumbersQuantity)
