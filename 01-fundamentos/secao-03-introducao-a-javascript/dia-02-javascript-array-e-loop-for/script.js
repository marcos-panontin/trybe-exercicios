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

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let item of numbers) {
//     sum += item;
// }

// const average = sum / numbers.length;

// console.log(average)

// if (average > 20) {
//     console.log("Média maior que 20")
// } else {
//     console.log("Média menor ou igual a 20")
// }

// let largestNumber = 0;

// for (let item of numbers) {
//     if (item > largestNumber) {
//         largestNumber = item;
//     }
// }

// // console.log(largestNumber);

// let oddNumbersQuantity = 0;

// for (let item of numbers) {
//     if (item % 2 !== 0) {
//         oddNumbersQuantity += 1
//     }
// }

// if (oddNumbersQuantity === 0) {
//     console.log("There aren't any odd numbers in the Numbers array")
// } else {
//         console.log("There are " + oddNumbersQuantity + " odd numbers in the Numbers array");

// }

// let smallestNumber;

// for (let item of numbers) {
//     if (item < smallestNumber) {
//         smallestNumber = item;
//     }
// }
// console.log(smallestNumber)

// // achando o menor número maior que ZERO

// let smallestNumberApartFromZero = 100000;

// for (let item of numbers) {
//     if (item != 0 && item < smallestNumberApartFromZero) {
//         smallestNumberApartFromZero = item;
//     }
// }
// console.log(smallestNumberApartFromZero);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

// let novaArray = [];
// for (let i = 1; i <= 25; i += 1){
//     novaArray.push(i)
// }
// console.log(novaArray)

// // Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

// for (let number of novaArray) {
//     console.log(number / 2)
// }

//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// let number = 9;
// let result = number;

// for (let multiplier = number - 1; multiplier >= 1; multiplier -= 1) {
//     result = result * multiplier;
// }
// console.log(result)

// let numbers2 = [5, 9, 3, 19, 70, 8, 100, 7, 35, 27, 1, 25000];
// let smallestNumber;
// for (let cont = 0; cont <= numbers2.length; cont++) {
//     if (cont === 0) {
//         smallestNumber = numbers2[cont];
//     } else if (smallestNumber > numbers2[cont]) {
//         smallestNumber = numbers2[cont];
//     }
// }
// console.log("O menor numero do array é: " + smallestNumber);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
// Copiar
// let word = 'Metida';
// let palyndrome = '';

// for (let letter of word) {

// }

// for (let index = word.length -1; index >= 0; index--) {
//     palyndrome += word[index];
// }

//     console.log(palyndrome);

//     Considere o array de strings abaixo:
// // Copiar
// let array = ["java", "javascript", "python", "html", "css"];
// // Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a  maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

// let largestWord = "";

// for (const word of array) {
//     if (word.length > largestWord.length) {
//         largestWord = word;
//     }
// }

// let smallestWord = array[0];

// for (let item of array) {
//     if (item.length < smallestWord.length) {
//         smallestWord = item;
//     }
// }

// console.log("Largest Word in the array is: " + largestWord);
// console.log("Smallest Word in the array is: " + smallestWord);


// Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let primosArray = [];
for (let num = 2; num <= 50; num++) {
    let isPrime = true

    for (let divisor = num; divisor >= 1; divisor -= 1){
        // console.log("num: " + num + "/ divisor: " + divisor + (num % divisor === 0));
        if (num % divisor === 0 && divisor !== num && divisor !== 1) {
            isPrime = false
        } 

    }
        console.log(num );
        console.log(isPrime);


}