let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log("Operadores verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!"qualquer texto ou espaço");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Operadores Falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


//Tem como definir valores padrão para variáveis
let nome = '' 
console.log(nome || 'desconhecido') //Vai aparecer desconhecido até eu colocar um nome