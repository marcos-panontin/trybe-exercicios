// let variavel = 20;

// console.log(variavel);
// console.log(variavel + 1);

// let nome = "Hulk";
// console.log(nome);
// console.log(nome + variavel + nome);

// let statusPS = 'tr';

// switch (statusPS) {
//     case "aprovada": console.log("PASSOU!");
//         break;
//     case "lista": console.log("ESPERA");
//         break;
//     case "reprovada": console.log("NÂO PASSOU");
//         break;
//     default: console.log("INFO INCORRETA");
// }

// let a = 8;
// let b = 14;
// let c = 16;

// console.log(a > b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(b % a);

// if (a > b) {
//     console.log("A maior que C");
//     if (a > c) {
//         console.log("MAIOR Número" + a);
//     } else {
//         console.log("MAIOR Número" + c);
//     }
// } else if (b > a) {
//     console.log("B maior que A");

//     if (b > c) {
//         console.log("MAIOR Número" + b);
//     } else {
//         console.log("MAIOR Número" + c);
//     }
// }

// let num = -9

// if (num > 0) {
//     console.log("POSITIVO");
// } else if (num < 0) {
//     console.log("NEGATIVO");
// } else {
//     console.log("É ZERO")
// }


// let angulo1 = -20;
// let angulo2 = 80;
// let angulo3 = 120;

// if (angulo1 + angulo2 + angulo3 === 180) {
//     console.log("180!")
//     if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log(false);
// }


// let pecaDeXadrez = 'arroz';

// switch (pecaDeXadrez.toLowerCase()) {
//     case "cavalo": console.log("L");
//         break;
//     case "bispo": console.log("Diagonals");
//         break;
//     case "peao": console.log("Um pra frente, dois se a primeira vez");
//         break;
//     case 'torre': console.log("HORINZONTALS");
//         break;
//     default: console.log("PECA INVALIDA");
// }

// let notaPorcentagem = 74;
// let notaConceito;

// if (notaPorcentagem >= 90 && notaPorcentagem < 100) {
//     notaConceito = "A";
// } else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
//     notaConceito = "B";
// } else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
//     notaConceito = "C";
// } else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
//     notaConceito = "BD";
// } else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
//     notaConceito = "E";
// } else if (notaPorcentagem >= 0 && notaPorcentagem < 50) {
//     notaConceito = "F";
// } else {
//     console.log("NOTA INVÁLIDA")
// }

// console.log(notaConceito)


// let num1 = 1;
// let num2 = 5;
// let num3 = 3;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let num1 = 1;
// let num2 = 5;
// let num3 = 3;

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let valorCusto = 0;
// let valorVenda = 410;
// let impostoSobreOCusto = valorCusto * 0.2;
// let valorCustoTotal = valorCusto + impostoSobreOCusto;

// let lucro;

// if (valorCusto <= 0 || impostoSobreOCusto <= 0 || valorCustoTotal <= 0) {
//     console.log("VALORES INVÁLIDOS")

// } else {
//     lucro = valorVenda - valorCustoTotal;
//     console.log(lucro)
// }

// cálculo salário líquido


// let salarioBruto = 3000;
// let aliquotaINSS;
// let salarioBase;
// let aliquotaIR;
// let salarioLiquido;

// if (salarioBruto <= 1556.94) {
//     aliquotaINSS = 0.08 * salarioBruto;
// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//     aliquotaINSS = 0.09 * salarioBruto;
// } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
//     aliquotaINSS = 0.11 * salarioBruto;
// } else if (salarioBruto > 5189.82) {
//     aliquotaINSS = 570.88;
// }

// salarioBase = salarioBruto - aliquotaINSS


// if (salarioBase <= 1903.98) {
//     aliquotaIR = 0;
// } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
//     aliquotaIR = 0.075 * salarioBase - 142.8;
// } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
//     aliquotaIR = 0.15 * salarioBase - 354.8;
// } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
//     aliquotaIR = 0.225 * salarioBase - 636.13;
// } else if (salarioBase >= 4664.68) {
//     aliquotaIR = 0.275 * salarioBase - 869.36;
// }

// salarioLiquido = salarioBase - aliquotaIR
// console.log(salarioBase);
// console.log(aliquotaINSS);
// console.log(aliquotaIR);
// console.log(salarioLiquido);


let pizzas = ["Palmito", "Mussarela", "Frango", "Calabresa"];

// console.log(pizzas[0]);
// console.log(pizzas[1]);
// console.log(pizzas[2]);
// console.log(pizzas[3]);

for (let i = 0; i < 4; i = i + 1) {
    console.log(pizzas[i])
}