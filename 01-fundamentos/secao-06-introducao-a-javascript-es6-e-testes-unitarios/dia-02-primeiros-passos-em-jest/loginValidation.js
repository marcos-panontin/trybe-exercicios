// loginValidation.js
const greetingMessage = (user) => `Hello, ${user}! Que bom ter você de volta`;

const loginErrorMessage = (user) => `Pessoa usuária ${user} não encontrada, tente novamente!`;

// trazemos aqui esse objeto somente para demonstrar como funciona a função verifyCredentials,
// mas poderiam ser quaisquer outros dados.
user = {
  userName: 'Joana',
  password: 123456,
};

let user;

const verifyCredentials = (userInfo) => {
  const userName = userInfo.userName;
  const password = userInfo.password;
  if (password === 123456 && userName === user.userName) {
    return greetingMessage(userName);
  }
  return loginErrorMessage(userName);
};
module.exports = { greetingMessage, loginErrorMessage, verifyCredentials };