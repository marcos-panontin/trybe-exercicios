const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
  {
    id: 7,
    name: "A Roda do Tempo",
    genre: "Fantasia",
    author: {
      name: "Robert Jordan",
      birthYear: 1948,
    },
    releaseYear: 1990,
  },
  {
    id: 8,
    name: "Hyperion",
    genre: "Ficção Científica",
    author: {
      name: "Dan Simmons",
      birthYear: 1948,
    },
    releaseYear: 1989,
  },
  {
    id: 9,
    name: "A Torre Negra",
    genre: "Fantasia",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1982,
  },
  {
    id: 10,
    name: "Neuromancer",
    genre: "Ficção Científica",
    author: {
      name: "William Gibson",
      birthYear: 1948,
    },
    releaseYear: 1984,
  },
  {
    id: 11,
    name: "O Guia do Mochileiro das Galáxias",
    genre: "Ficção Científica",
    author: {
      name: "Douglas Adams",
      birthYear: 1952,
    },
    releaseYear: 1979,
  },
  {
    id: 12,
    name: "A Espada do Destino",
    genre: "Fantasia",
    author: {
      name: "Andrzej Sapkowski",
      birthYear: 1948,
    },
    releaseYear: 1992,
  },
  {
    id: 13,
    name: "O Fim da Eternidade",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1955,
  },
  {
    id: 14,
    name: "A Roda do Tempo",
    genre: "Fantasia",
    author: {
      name: "Brandon Sanderson",
      birthYear: 1975,
    },
    releaseYear: 2007,
  },
  {
    id: 15,
    name: "Jurassic Park",
    genre: "Ficção Científica",
    author: {
      name: "Michael Crichton",
      birthYear: 1942,
    },
    releaseYear: 1990,
  },
  {
    id: 16,
    name: "A Guerra dos Mundos",
    genre: "Ficção Científica",
    author: {
      name: "H. G. Wells",
      birthYear: 1866,
    },
    releaseYear: 1898,
  },
  {
    id: 17,
    name: "O Nome do Vento",
    genre: "Fantasia",
    author: {
      name: "Patrick Rothfuss",
      birthYear: 1973,
    },
    releaseYear: 2007,
  },
  {
    id: 18,
    name: "O Jogo do Exterminador",
    genre: "Ficção Científica",
    author: {
      name: "Orson Scott Card",
      birthYear: 1951,
    },
    releaseYear: 1985,
  },
  {
    id: 19,
    name: "A Rainha Vermelha",
    genre: "Fantasia",
    author: {
      name: "Victoria Aveyard",
      birthYear: 1990,
    },
    releaseYear: 2015,
  },
  {
    id: 20,
    name: "Os Filhos de Anansi",
    genre: "Fantasia",
    author: {
      name: "Neil Gaiman",
      birthYear: 1960,
    },
    releaseYear: 2005,
  },
  {
    id: 21,
    name: "O Planeta dos Macacos",
    genre: "Ficção Científica",
    author: {
      name: "Pierre Boulle",
      birthYear: 1912,
    },
    releaseYear: 1963,
  },
  {
    id: 22,
    name: "A Batalha do Apocalipse",
    genre: "Fantasia",
    author: {
      name: "Eduardo Spohr",
      birthYear: 1976,
    },
    releaseYear: 2007,
  },
  {
    id: 23,
    name: "O Fim da Infância",
    genre: "Ficção Científica",
    author: {
      name: "Arthur C. Clarke",
      birthYear: 1917,
    },
    releaseYear: 1953,
  },
  {
    id: 24,
    name: "O Caçador de Andróides",
    genre: "Ficção Científica",
    author: {
      name: "Philip K. Dick",
      birthYear: 1928,
    },
    releaseYear: 1968,
  },
  {
    id: 25,
    name: "Harry Potter e a Pedra Filosofal",
    genre: "Fantasia",
    author: {
      name: "J. K. Rowling",
      birthYear: 1965,
    },
    releaseYear: 1997,
  },
  {
    id: 26,
    name: "A Torre Negra",
    genre: "Fantasia",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1982,
  },
  {
    id: 27,
    name: "Neuromancer",
    genre: "Ficção Científica",
    author: {
      name: "William Gibson",
      birthYear: 1948,
    },
    releaseYear: 1984,
  },
  {
    id: 28,
    name: "O Guia do Mochileiro das Galáxias",
    genre: "Ficção Científica",
    author: {
      name: "Douglas Adams",
      birthYear: 1952,
      deathYear: 2001,
    },
    releaseYear: 1979,
  },
  {
    id: 29,
    name: "O Vento pela Fechadura",
    genre: "Fantasia",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 2012,
  },
  {
    id: 30,
    name: "O Hobbit",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1937,
  },
  {
    id: 31,
    name: "It",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const answer = books.find((item) => item.author.birthYear === 1947);

//Retorne o nome do livro com menor número de caracteres (menor nome).

const findSmallestTitle = () => {
  let smallestTitle = books[0].name;
  books.forEach((item) => {
    if (item.name.length < smallestTitle.length) {
      smallestTitle = item.name;
    }
  });
  return smallestTitle;
};

// console.log(findSmallestTitle());

//Encontre o primeiro livro cujo nome possua 26 caracteres.

const firstTo26 = () => books.find((book) => book.name.length >= 26);
// console.log(firstTo26());

//Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

const onlyXCenturyAuthors = (year) =>
  books.every((book) => book.author.birthYear > year);
// console.log(onlyXCenturyAuthors(1900));

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const areThereXXsBook = (decade) =>
  books.some(
    (book) => book.releaseYear > decade && book.releaseYear <= decade + 9
  );
// console.log(areThereXXsBook(1930));

const uniqueBirthYearAuthor = () => {
  let uniqueBirthYear = false;
  for (let item of books) {
    let count = 1;
    const sameYearAuthors = {};
    sameYearAuthors.authors = [];
    books.some((book) => {
      if (
        book.author.birthYear === item.author.birthYear &&
        book.author.name !== item.author.name
      ) {
        sameYearAuthors.year = book.author.birthYear;
        if (!sameYearAuthors.authors.includes(book.author.name)) {
          sameYearAuthors.authors.push(book.author.name);
        }
        count += 1;
      }
    });
    return sameYearAuthors;
  }
};

console.log(uniqueBirthYearAuthor());
