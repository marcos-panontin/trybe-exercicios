// // let car = {
// //     type: "Fiat",
// //     model: "500",
// //     color: "white",
// // };

// // console.log(car['type']);

// // let diasDaSemana = {
// //   um: 'domingo',
// //   2: 'segunda-feira',
// //   3: 'terça-feira',
// //   4: 'quarta-feira',
// //   5: 'quinta-feira',
// //   6: 'sexta-feira',
// //   7: 'sábado',
// // };

// // console.log(diasDaSemana.um); // SyntaxError: Unexpected number
// // console.log(diasDaSemana['1']); // domingo

// // ////

// // let conta = {
// //   agencia: '0000',
// //   banco: {
// //     cod: '012',
// //     id: 4,
// //     nome: 'TrybeBank',
// //   },
// // };

// // let infoDoBanco = 'banco';
// // console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// // console.log(conta[infoDoBanco]['nome']); // TrybeBank

// // console.log(conta.agencia); // 0000
// // console.log(conta['agencia']); // 0000

// // console.log(conta.banco.cod); // 012
// // console.log(conta['banco']['id']); // 4

// // let singer = {
// //   nombre: 'Milton',
// //   lastName: 'Nascimento',
// // }

// // singer.fullName = singer.nombre + ' ' + singer.lastName
// // console.log(singer.fullName);
// // console.table(singer)

// //Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

// // let player = {
// //   nome: "Marta",
// //   lastName: "Silva",
// //   age: 34,
// //   medals: { golden: 2, silver: 3, },
// // }

// // //Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

// // console.log('A jogadora', player.nome, player.lastName, 'tem', player.age, 'anos de idade.');

// // //Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.

// // player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// // //Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

// // console.log('A jogadora', player.nome, player.lastName, 'foi eleita a melhor do mundo por ', player.bestInTheWorld.length, 'vezes.')

// // //Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

// // console.log('A jogadora', player.nome, player.lastName, ', de', player.age, 'anos de idade, possui', player.medals.golden, 'medalhas de ouro e', player.medals.silver, 'medalhas de prata.')

// let car = {
//     type: "Fiat",
//     model: "500",
//     color: "white",
// };

// for (let index in car) {
//   console.log(index);
//     console.log(car[index]);
// }

// // console.log(car[type]); // NÃO FUNCIONA ASSIM. TEM QUE SER car.type OU car['type']

// console.log(car.type);

// //Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: "João",
//     person2: "Maria",
//     person3: "Jorge",
// };

// for (let key in names) {
//   console.log('Olá,', names[key]);
// }

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: "A3 Sedan",
//     manufacturer: "Audi",
//     year: 2020,
// };

// for (let key in car) {
//     console.log(key, car[key]);
// }

// let customer1 = {
//     firstName: "Roberto",
//     age: 22,
//     job: "Teacher",
// };

// customer1.lastName = "Faria";

// let customer2 = {
//     firstName: "Maria",
//     age: 23,
//     job: "Medic",
// };

// console.log(customer2);
// customer2["lastName"] = "Silva";
// console.log(customer2);

// Agora, sempre que você quiser adicionar uma nova propriedade, basta chamar a função addProperty com os parâmetros desejados. Para conferir se a função está funcionando corretamente, imprima em seu terminal o objeto antes e depois da execução da função.

// let customer = {
//     firstName: "Roberto",
//     age: 22,
//     job: "Teacher",
// };

// let newKey = "lastName";
// let lastName = "Ferreira";

// function addProperty(object, key, value) {
//     object[key] = value;
// }

// addProperty(customer, newKey, lastName);
// console.log(customer);

// newKey = "fullName";
// let fullName = customer.firstName + " " + customer.lastName;

// addProperty(customer, newKey, fullName);
// console.log(customer);

// //Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

// const student = {};

// addProperty(student, "name", "Marcos");
// student.email = "amarcospanontin@gmail.com";
// newKey = 11953731475;
// addProperty(student, "cellphone number", newKey);

// let gitHubLink = "https://github.com/marcos-panontin";
// newKey = "Github Profile"
// addProperty(student, newKey, gitHubLink)

// student['Linkedin Profile'] = "https://www.linkedin.com/in/marcos-panontin/";

// console.log(student);

// console.log(Object.keys(student));

//Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”.

// let student1 = {
//     html: "Muito Bom",
//     css: "Bom",
//     javascript: "Ótimo",
//     softskills: "Ótimo",
// };

// console.log(Object.keys(student1));

// let student2 = {
//     html: "Bom",
//     css: "Ótimo",
//     javascript: "Ruim",
//     softskills: "Ótimo",
//     git: "Bom", // chave adicionada
// };

// function showSkills(object) {
//     let skillsArray = Object.keys(object);
//     let adjectivesArray = Object.values(object);
//     for (let item of skillsArray) {
//         console.log(item + ", Nível: ", object[item]);
//     }
// }

// showSkills(student1);
// showSkills(student2);

// let student = {
//     html: "Muito Bom",
//     css: "Bom",
//     javascript: "Ótimo",
//     softskill: "Ótimo",
// };

// function listSkillsValuesWithFor(student) {
//     let skills = [];
//     for (skill in student) {
//         skills.push(student[skill]);
//     }

//     return skills;
// }

// function listSkillsValuesWithValues(student) {
//     return Object.values(student);
// }

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// //Observe que o retorno da variável pairKeyValue é um array. Cada um dos elementos é outro array com apenas dois dados: a chave da propriedade e seu valor.

// let countries = {
//     franca: "Paris",
//     brasil: "Brasília",
//     espanha: "Madrid",
//     portugal: "Lisboa",
// };
// let pairKeyValue = Object.entries(countries);
// console.log(pairKeyValue);

// // for (let index in pairKeyValue) {
// //     console.log('A capital da/do/de', pairKeyValue[index][0], 'é', pairKeyValue[index][1])
// // }

// // com for of
// for (let item of pairKeyValue) {
//     console.log('A capital de', item[0], 'é', item[1]);
// }

// // Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto-destino, que foi alterado ao adicionar as novas propriedades.

// // Que tal fazer um teste para confirmar essa informação?

// let person = {
//   name: 'Roberto',
// };

// let lastName = {
//   lastName: 'Silva',
// };

// let clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// //Para resolver esse problema, pode-se passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo a seguir.

// let person = {
//     name: "Roberto",
// };

// let lastName = {
//     lastName: "Silva",
// };

// let newPerson = Object.assign({}, person, lastName);
// newPerson.name = "Gilberto";
// console.log(newPerson);
// console.log(person);

//Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log('Bem-vinda, ' + info.personagem);

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

info.recorrente = "Sim";

// console.log(info);

for (let key in info) {
    // console.log(key);
}

for (let key in info) {
    // console.log(info[key])
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.

const newInfo = Object.assign({}, info);

// console.log(newInfo);

newInfo.personagem = "Tio Patinhas";
// console.log(newInfo);
newInfo.origem = "Christmas on Bear Mountain, Dell’s Four Color Comics #178";
// console.log(newInfo);
newInfo.nota = "O último MacPatinhas";
// console.log(newInfo);
newInfo.recorrente = "Sim";

//Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

for (let key in info) {
    if (key === "recorrente" && info[key] === "Sim" && newInfo[key] === "Sim") {
        // console.log('Ambos recorrentes')
    } else {
        // console.log(info[key] + ' e ' + newInfo[key]);
    }
}

// Com base neste objeto, faça os exercícios a seguir.

let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
        {
            titulo: "O Pior Dia de Todos",
            autor: "Daniela Kopsch",
            editora: "Tordesilhas",
        },
    ],
};

//Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// console.log(`"O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}."`);

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

const newBook = {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "JK Rowling",
    editora: "Rocco",
};

leitor.livrosFavoritos.push(newBook);
//
// console.log(leitor);

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, em que “<quantidade>” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

// console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos.`);

//Pedido de clientes
// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

let order = {
    name: "Rafael Andrade",
    phoneNumber: "11-98763-1416",
    address: {
        street: "Rua das Flores",
        number: "389",
        apartment: "701",
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: "Coca-Cola Zero",
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: "Ana Silveira",
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

//Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

function customerInfo(order) {
    return `Olá, ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street} nº ${order.address.number}, apartamento ${order.address.apartment}.`;
}

// console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';

function orderModifier(order) {
    // Modifique o nome da pessoa compradora para Luiz Silva;
    order.name = "Luiz Silva";
    // Modifique o valor total da compra para R$ 50,00.
    order.payment.total = 50;
    return `Olá, ${order.name}, o valor total de seu pedido de ${
        Object.keys(order.order.pizza)[0]
    }, ${Object.keys(order.order.pizza)[1]} e ${
        order.order.drinks.coke.type
    } é R$${order.payment.total.toFixed(2)}.`;
}

// console.log(orderModifier(order));

// Organizando lições
// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

let lesson1 = {
    materia: "Matemática",
    numeroEstudantes: 20,
    professor: "Maria Clara",
    turno: "manhã",
};

let lesson2 = {
    materia: "História",
    numeroEstudantes: 20,
    professor: "Carlos",
};

let lesson3 = {
    materia: "Matemática",
    numeroEstudantes: 10,
    professor: "Maria Clara",
    turno: "noite",
};






// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

function addProperty(object, key, value) {
    object[key] = value;
}

addProperty(lesson2, "turno", "noite");
// console.log(lesson2);

// // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// function keyList(object) {
//     console.log(Object.keys(object));
// }

// keyList(lesson1);

// // Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

// function objectSize(object) {
//     console.log(Object.keys(object).length);
// }

// objectSize(lesson3);
// // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// function showValues(object) {
//     console.log(Object.values(object));
// }

// showValues(lesson1);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

// function totalNumberOfStudentes() {
//     totalNumberOfStudentes = 0;
//     for (let key in allLessons) {
//         totalNumberOfStudentes += allLessons[key].numeroEstudantes;
//     }
//     return totalNumberOfStudentes;
// }

// console.log(totalNumberOfStudentes());

// // Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matemática'

function getValueByNumber(lesson, position) {
    const valuesArray = Object.values(allLessons[lesson]);
    return valuesArray[position];
}

console.log(getValueByNumber('lesson2', 3))

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:

// function verifyPair(object, key, value) {
//     const arrayOfEntries = Object.entries(object);
//     let parKeyValueExists = false;
//     for (let entry of arrayOfEntries) {
//         if (entry.includes(key) && entry.includes(value)) {
//             parKeyValueExists = true;
//         }
//     }
//     return parKeyValueExists;
// }

// console.log(verifyPair(lesson3, "turno", "noite"));
// // // Output: true,
// console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// // // Output: false

const motherObject = {
    daugherObject1: {
        info: {
            property1: "xablau",
            property2: "xebleu",
        },
        name: "Nome",
    },
    daugherObject2: {
        info: {
            property1: "xablau",
            property2: "xebleu",
        },
        name: "Nome",
    },
    daugherObject3: {
        info: {
            property1: "xablau",
            property2: "xebleu",
        },
        name: "Nome",
    },
};

console.log((Object.keys(motherObject.daugherObject2)));
