
const checkInputs = (name, age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias')
    } else if (typeof name !== 'string' || typeof age !== 'number') {
                throw new Error('Insira um nome e idade válidos.')

    }
}

const checkAge = (name, age) => {
    if (age < 18) {
        throw new Error(`${name}, infelizmente você ainda não pode fazer as aulas.`)
    }
}
const studentRegister = (name, age) => {
try {
    checkInputs(name, age);
    checkAge(name, age);
    return `${name}, seja bem-vindo(a) a AuTrybe!`
    
} catch (error) {
    return error.message;
}

}

console.log(studentRegister('Joao', '22'));