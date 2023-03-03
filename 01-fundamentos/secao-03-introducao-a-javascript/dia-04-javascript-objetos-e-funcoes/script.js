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

console.log('Bem-vinda, ' + info.personagem);


// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

info.recorrente = 'Sim';

console.log(info);

for (let key in info) {
    console.log(key);
}

for (let key in info) {
    console.log(info[key])
}

const newInfo = Object.assign({}, info);

console.log(newInfo);

newInfo.personagem = 'Tio Patinhas';
newInfo.origem = "Christmas on Bear Mountain, Dell’s Four Color Comics #178";
newInfo.nota = "O último MacPatinhas";
newInfo.recorrente = 'Sim';

console.log('newInfo new:' + newInfo);
