const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

const listItemsCollection = document.getElementsByTagName('li');

const clickListItem = (event) => {
    for (let item of listItemsCollection) {
        item.classList.remove('tech')
    }
    event.target.classList.add('tech')
};

for (let item of listItemsCollection) {
    item.addEventListener('click', clickListItem)
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento // com a classe 'tech';


const changeText = () => {
    console.log('funcao changeText ativada');
    for (let item of listItemsCollection) {
        if (item.classList.contains('tech')) {
            item.textContent = input.value;
        }
    }
}

input.addEventListener('change', changeText);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

const redirect = () => {
    window.open("https://marcos-panontin.github.io/");
}

myWebpage.addEventListener('dblclick', redirect)

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere// a cor do mesmo;

const changeColor = () => {
    myWebpage.style.backgroundColor = 'tomato'
}

myWebpage.addEventListener('mouseover', changeColor)

// Segue abaixo um exemplo do uso de event.target:

const resetText = (event) => {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = "Opção reiniciada";
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
};

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
