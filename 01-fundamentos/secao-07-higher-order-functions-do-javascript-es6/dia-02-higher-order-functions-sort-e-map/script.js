// // const food = ["arroz", "feijão", "farofa", "chocolate", "doce de leite"];
// // food.sort();
// // // console.log(food);
// // // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]


// // // const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// // // inventory.sort();
// // // console.log(inventory); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

// // const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// // inventory.sort((a, b) => a - b);

// // inventory.sort((a, b) => b - a);
// // // console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // const people = [
// //   { name: "Mateus", age: 18 },
// //   { name: "José", age: 16 },
// //   { name: "Ana", age: 23 },
// //   { name: "Cláudia", age: 20 },
// //   { name: "Bruna", age: 19 },
// // ];

// // people.sort((a, b) => { return a.name < b.name ? -1 : 1 })
// // // console.log(people);

// // people.sort((a, b) => b.age - a.age);
// // // console.log(people);

// // const pessoas = ['joao', 'maria', 'jose'];


// const persons = [
//   { firstName: "Maria", lastName: "Ferreira" },
//   { firstName: "João", lastName: "Silva" },
//   { firstName: "Antonio", lastName: "Cabral" },
// ];

// const fullNamesFor = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNamesFor.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// // console.log(fullNamesFor);


// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

// // console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]


// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => (number > 0) ? number * -1 : number)

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]



// const products = ["Arroz", "Feijão", "Alface", "Tomate"];
// const prices = [2.99, 3.99, 1.5, 2];

// const listProducts = products.map((element) => {
//   return {
//     [element]: prices[products.indexOf(element)]

//   }
  
// });
// // console.log(listProducts);


// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.map((number) => number * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

// const twiceNumbers = [];
// numbers.forEach((number) => twiceNumbers.push(number * 2));

// console.log(twiceNumbers); // Retorno: [2, 4]



const students = [
  {
    firstName: "João",
    lastName: "Silva",
    age: 14,
    period: "Manhã",
    subjects: [
      { name: "Matemática", grade: 67 },
      { name: "Português", grade: 79 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 65 },
    ],
  },
  {
    firstName: "Mario",
    lastName: "Ferreira",
    age: 15,
    period: "Tarde",
    subjects: [
      { name: "Matemática", grade: "59" },
      { name: "Português", grade: "80" },
      { name: "Química", grade: "78" },
      { name: "Biologia", grade: "92" },
    ],
  },
  {
    firstName: "Jorge",
    lastName: "Santos",
    age: 15,
    period: "Manhã",
    subjects: [
      { name: "Matemática", grade: "76" },
      { name: "Português", grade: "90" },
      { name: "Química", grade: "70" },
      { name: "Biologia", grade: "80" },
    ],
  },
  {
    firstName: "Maria",
    lastName: "Silveira",
    age: 14,
    period: "Manhã",
    subjects: [
      { name: "Matemática", grade: "91" },
      { name: "Português", grade: "85" },
      { name: "Química", grade: "92" },
      { name: "Biologia", grade: "90" },
    ],
  },
  {
    firstName: "Natalia",
    lastName: "Castro",
    age: 14,
    period: "Manhã",
    subjects: [
      { name: "Matemática", grade: "70" },
      { name: "Português", grade: "70" },
      { name: "Química", grade: "60" },
      { name: "Biologia", grade: "50" },
    ],
  },
  {
    firstName: "Wilson",
    lastName: "Martins",
    age: 14,
    period: "Manhã",
    subjects: [
      { name: "Matemática", grade: "80" },
      { name: "Português", grade: "82" },
      { name: "Química", grade: "79" },
      { name: "Biologia", grade: "75" },
    ],
  },
];


// const allNameStudents = [];

// for (let index = 0; index < students.length; index += 1) {
//   if (students[index].period === "Manhã") {
//     allNameStudents.push(
//       `${students[index].firstName} ${students[index].lastName}`
//     );
//   }
// }

// console.log(allNameStudents);

// const allNameStudentsFor = [];

// students.forEach((student) => {
//   if (student.period === "Manhã") {
//     allNameStudentsFor.push(`${student.firstName} ${student.lastName}`);
//   }
// });

// console.log(allNameStudentsFor);

// const findStudent = (name, students) => {
//   for (let index = 0; index < students.length; index += 1) {
//     if (students[index].firstName === name) {
//       return students[index];
//     }
//   }
// };

// const reportStatus = (name, students) => {
//   const getStudent = findStudent(name, students);
//   const report = [];
//   for (let index = 0; index < getStudent.subjects.length; index += 1) {
//     if (getStudent.subjects[index].grade >= 60) {
//       report.push(`${getStudent.subjects[index].name} - Aprovado`);
//     } else {
//       report.push(`${getStudent.subjects[index].name} - Reprovado`);
//     }
//   }
//   return report;
// };

// console.log(reportStatus("Natalia", students));


// const reportStatusHof = (name, students) => {
//   const studentInfo = students.find((student) => student.firstName === name);
//   return studentInfo.subjects.map(
//     (subject) =>
//       `${subject.name} - ${subject.grade >= 60 ? "Aprovado" : "Reprovado"}`
//   );
// };

// console.log(reportStatusHof("Natalia", students));


const pessoas = [
  { nome: "Joana", idade: 37 },
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 32 },
  { nome: "Aline", idade: 28 },
];

pessoas.forEach((pessoa) => console.log(pessoa));
console.log(pessoas.find((pessoa) => pessoa.nome === 'Aline'));