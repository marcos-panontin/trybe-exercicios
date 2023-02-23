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


let pecaDeXadrez = 'arroz';

switch (pecaDeXadrez.toLowerCase()) {
    case "cavalo": console.log("L");
        break;
    case "bispo": console.log("Diagonals");
        break;
    case "peao": console.log("Um pra frente, dois se a primeira vez");
        break;
    case 'torre': console.log("HORINZONTALS");
        break;
    default: console.log("PECA INVALIDA");
}

let notaPorcentagem = 74;
let notaConceito;

if (notaPorcentagem >= 90 && notaPorcentagem < 100) {
    notaConceito = "A";
} else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
    notaConceito = "B";
} else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
    notaConceito = "C";
} else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
    notaConceito = "BD";
} else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
    notaConceito = "E";
} else if (notaPorcentagem >= 0 && notaPorcentagem < 50) {
    notaConceito = "F";
} else {
    console.log("NOTA INVÁLIDA")
}

console.log(notaConceito)