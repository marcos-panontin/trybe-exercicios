// Primeira parte
const promo = [
  { product: "bola de beach tennis", price: 29.99 },
  { product: "mochila de trilha 20 litros", price: 120.99 },
  { product: "capacete de ciclista", price: 180.59 },
  { product: "toalha compacta de secagem", price: 39.99 },
  { product: "kit 5 camisetas Dry Fit", price: 99.99 },
  { product: "caneleiras de peso - 3kg (par)", price: 44.99 },
  { product: "bola de ginástica e pilates", price: 149.59 },
  { product: "óculos de natação", price: 18.99 },
  { product: "capa protetora de prancha de surf", price: 89.59 },
  { product: "bola de basquete", price: 39.99 },
];

const button = document.querySelector("#send-button");

button.addEventListener("click", () => {
  const name = document.querySelector("#name-id").value;
  const number = document.querySelector("#number-id").value;

  showPromo(name, number);
});

const showPromo = (name, number) => {
  const firstText = document.querySelector("#text-initial");
  const secondText = document.querySelector("#text-final");

  try {
    checkName(name);
    checkNumber(parseInt(number));
    checkValidRange(number);
    const productObject = checkPromo(number);

    firstText.innerHTML = `Boas-vindas, ${name}!`;
    secondText.innerHTML = `A promoção do dia é: 
      ${productObject.product} no valor de R$ ${productObject.price}`;
  } catch (err) {
    secondText.innerHTML = err.message;
  }
  finally {
      document.querySelector("#name-id").value = "";
      document.querySelector("#number-id").value = "";
  }
};

const checkName = (name) => {
  let letters = /[aA-zZ]+/;

  if (!name.match(letters)) {
    throw new Error("É necessário digitar um nome válido");
  }
};

// Segunda parte
const checkNumber = (number) => {
  if (isNaN(number)) {
    throw new Error('É necessário digitar um número');
  }
}

// Terceira parte
const checkPromo = (number) => {
  for (let index = 0; index < promo.length; index += 1) {
    if (number - 1 === index) {
      return promo[index];
    }
  }
}

//Quarta parte

const checkValidRange = (number) => {
  if (number > promo.length || number < 1) {
    throw new Error(`Nossas promoções vão de 1 a ${promo.length}. Escolha um número nesse intervalo.`)
  }
}


// Para praticar, considere o exemplo de um boletim escolar
// Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
// Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.

// const calculateAverage = (grade1, grade2, grade3, grade4) => {

// try {
//   validateNumbers(grade1, grade2, grade3, grade4)
//   return (grade1 + grade2 + grade3 + grade4)/4
// } catch (error) {
//   return error.message;
// }

// }

// const validateNumbers = (number1, number2, number3, number4) => {
//   if (
//     typeof number1 !== "number" ||
//     typeof number2 !== "number" ||
//     typeof number3 !== "number" ||
//     typeof number4 !== "number"
//   ) {
//     throw new Error("Insira números válidos para os valores das notas.");
//   }
// }

// let a = 197

// console.log(calculateAverage(1, 2, 3, a));
// Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento
