// const skills = ['HTML', 'CSS', 'JavaScript'];

// const addNewSkill = (newSkill) => {
//   skills.push(newSkill);
// }

// test('Adiciona Jest na lista de habilidades', () => {  
//   const previousLength = skills.length;
//   addNewSkill('Jest');
//   expect(skills).toContain('Jest');
//   expect(skills).toHaveLength(previousLength + 1);
// });

// const createUser = (firstName, lastName) => {
//   const user = {
//     email: (firstName + '_' + lastName + '@example.com').toLowerCase(),
//     password: Math.floor(Math.random() * 100000000),
//   };
//   return user;
// }

// test('Cria email e senha', () => {
//   const user = createUser('Mona', 'Lisa');
//   expect(user).toHaveProperty('email', 'mona_lisa@example.com');
//   expect(user).toHaveProperty('password');
// });

// const multiplyByTwo = (number) => {
//   if (!number) {
//     throw new Error('number é indefinido');
//   }
//   return number * 2;
// };
// multiplyByTwo(4);

// test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
//   expect(multiplyByTwo(4)).toBe(8);
// });

// test('testa se multiplicar por indefinido retorna erro', () => {
//     expect(() => {multiplyByTwo()}).toThrow();
// });

// test('testa se multiplicar por indefinido retorna a mensagem de erro específica', () => {
//     expect(() => {multiplyByTwo()}).toThrow(new Error('number é indefinido'))
// })

// const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const weekendDays = ['Saturday', 'Sunday'];

// const weekDays = workDays.concat(weekendDays);
// console.log(weekDays);

// test('Testa se Sunday is a weekday', () => {
//     expect(weekDays).toContain('Sunday')
// })
// test('Testa se Sunday is a weekday', () => {
//     expect(weekDays).not.toContain('Sunday')
// })


const removeBebida = (array, item) => {
    array.splice(array.indexOf(item), 1);
    return array;
};


describe('Remove sabor de bebida', () => {
    it('removes agua', () => {
        const bebidas = ['agua', 'garapa', 'h2o'];
        expect(removeBebida(bebidas, 'agua')).toEqual(['garapa', 'h2o']);
        console.log(bebidas);
    });
    it('removes garapa', () => {
                const bebidas = ['agua', 'garapa', 'h2o'];

        expect(removeBebida(bebidas, 'garapa')).toEqual(['agua', 'h2o']);
        console.log(bebidas);
    });
    it('removes groselha caso exista', () => {
                        const bebidas = ['agua', 'garapa', 'h2o'];

        expect(removeBebida(bebidas, 'garapa')).toContain('garapa')
    });
})