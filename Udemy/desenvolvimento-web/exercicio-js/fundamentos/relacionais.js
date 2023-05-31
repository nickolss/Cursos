console.log("1-", "1" == 1);
console.log("2-", "1" === 1); //Compara o valor e o tipo primitivo
console.log("3-", "3" != 3);
console.log("4-", "3" !== 3);

console.log("5-", 3 < 2);
console.log("6-", 3 > 2);
console.log("7-", 3 <= 2);
console.log("8-", 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);

//Devido a referência das variáveis ser diferente, vai dar false nos dois casos
console.log("9-", d1 == d2);
console.log("10-", d1 === d2);
console.log("11-", d1.getTime() === d2.getTime()); //Vai pegar o tempo e como o tempo é igual, dá true
console.log("12-" , undefined == null)
console.log("13-" , undefined === null)
