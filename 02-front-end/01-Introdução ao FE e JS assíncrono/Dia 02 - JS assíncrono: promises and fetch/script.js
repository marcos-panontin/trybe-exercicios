//   // função que gera um número aleatório
// const generateRandomNumber = () => Math.round(Math.random() * 10);

// const randomNumberPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       if (randomNumber % 2 === 0) {
//         resolve(randomNumber)
//       } else {
//         reject(new Error(`O número ${randomNumber} é ímpar.`))
//       }
//     }, 1000)
//   });

// randomNumberPromise()
//   .then((response) => console.log(`ERRO: O número gerado é ${response}.`))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log('Fim da execução da primeira promise.'));
    
//   console.log('última linha')

// fetch('https://Adummyjson.com/quotes/random')
//   .then((response) => response
//     .json())
//     .then((data) => console.log(`${data.quote} | ${data.author}`))
//   .catch((error) => console.log(`Erro na requisição: ${error.message}.`));


// fetch("https://api.goprogram.ai/inspiration")
//   .then(response => console.log(response.json().then((response) => console.log(response))));