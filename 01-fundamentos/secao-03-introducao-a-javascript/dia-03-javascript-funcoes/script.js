// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

let balance = 100;

function addValue(value) {
    return (balance += value);
}

function subtractValue(value) {
    return (balance -= value);
}

function multiplyValue(value) {
    return (balance *= value);
}

function divideValue(value) {
    return (balance /= value);
}

console.log(addValue(10));
console.log(subtractValue(25));
console.log(multiplyValue(10));
console.log(divideValue(10));

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ["Ada", "John", "Gus"];

function addClients(clientName) {
    if (typeof clientName === "string") {
        clientesTrybeBank.push(clientName);
    } else {
        console.log("Error. You need to enter a string!");
    }
}

addClients("Clark");
addClients("Jack");

console.log(clientesTrybeBank);

//Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

// COMENTADO POIS ESSA FUNÇÃO SERÁ REFATORADA EM FUNÇÕES MENORES, LOGO ABAIXO

// function removeClients(clientName) {
//     if (typeof clientName === "string") {
//         if (clientesTrybeBank.includes(clientName)) {
//             let clientIndex = clientesTrybeBank.indexOf(clientName);
//             clientesTrybeBank.splice(clientIndex, 1);
//             return 'O cliente ' + clientName + " foi excluído com sucesso do sistema.";
//         } else {
//             return "Cliente não está no banco de dados!";
//         }
//     }
//     else {
//         return "Insira um nome válido.";
//     }
// }

// console.log(removeClients("Clark"));

// console.log(removeClients("Jack"));

// console.log(removeClients(4));


//Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

function checkIfClientExists(clientName) {
    if (clientesTrybeBank.includes(clientName)) {
        let clientIndex = clientesTrybeBank.indexOf(clientName);
        clientesTrybeBank.splice(clientIndex, 1);
        return (
            "O cliente " + clientName + " foi excluído com sucesso do sistema."
        );
    } else {
        return "Cliente não está no banco de dados!";
    }
}

function checkIfInputIsString(clientName) {
    if (typeof clientName === "string") {
        return true
    } else {
        return false
    }
}

function removeClients(clientName) {
    if (!checkIfInputIsString(clientName)) {
        return "Insira um nome válido.";
    } else {
    return checkIfClientExists(clientName);
    }

}

console.log(removeClients("Clark"));

console.log(removeClients("Jack"));

console.log(removeClients(4));
