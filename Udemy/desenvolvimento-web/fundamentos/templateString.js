const nome = "joão S2";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá 
    ${nome}!
`;

console.log(concatenacao, template);

//Dá para fazer expressões com Template String
console.log(`1 + 1 = ${1 + 1}`);

const up = (text) => text.toUpperCase();
console.log(`Ei... ${up('cuidado')}`)
