const body = document.getElementsByTagName('body')[0];

//Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const mainH1 = document.createElement('h1')
mainH1.innerText = "TrybeTrip - Agência de Viagens";
mainH1.style.color = 'black';
body.appendChild(mainH1);

//Adicione a tag main com a classe main-content como filho da tag body;

const mainTag = document.createElement('main');
mainTag.classList.add('main-content');
body.appendChild(mainTag);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const sectionTag = document.createElement('section');
sectionTag.classList.add('center-content');
mainTag.appendChild(sectionTag);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const pTag = document.createElement('p');
pTag.innerText = 'Esse aqui é um texto fabuloso.';
sectionTag.appendChild(pTag);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const leftSectionTag = document.createElement('section');
leftSectionTag.classList.add('left-content');
mainTag.appendChild(leftSectionTag);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const rightSectionTag = document.createElement("section");
rightSectionTag.classList.add("right-content");
mainTag.appendChild(rightSectionTag);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const img = document.createElement('img');
img.src = "https://picsum.photos/200";
img.classList.add('small-image');
leftSectionTag.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const unorderedList = document.createElement('ul');
rightSectionTag.appendChild(unorderedList);

const numbers = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
];

for (let number of numbers) {
    const listItem = document.createElement('li');
    listItem.innerText = number;
    unorderedList.appendChild(listItem)
}


// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
    const heading = document.createElement('h3');
    heading.innerText = "Xablau" + index
    mainTag.appendChild(heading);
}

// Adicione a classe title na tag h1 criada;

mainH1.classList.add('title');

// Adicione a classe description nas 3 tags h3 criadas;

for (let element of document.getElementsByTagName("h3")) {
    element.classList.add("description");
}

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

mainTag.removeChild(leftSectionTag);

// Centralize a section criada no passo 6 (aquele que possui a classe right-content).

rightSectionTag.style.margin = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

document.getElementsByClassName('center-content')[0].parentElement.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

unorderedList.lastElementChild.remove()
unorderedList.lastElementChild.remove()