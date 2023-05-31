const escola = "Udemy";

console.log(escola.charAt(1));
console.log(escola.charCodeAt(2));
console.log(escola.indexOf("y"));


const email = "nickolasMaia@gmail.com";
const localArroba = email.indexOf("@");
const provedorEmail = email.substring(localArroba, email.length +1 );
const nomeEmail = email.substring(0 , localArroba)

console.log(nomeEmail);
console.log(provedorEmail);


const nickName = "nk920"
const nickNameSemNumeros = nickName.replace(/\d/g , '')
const nickNameSemZero = nickName.replace(0, '') //Os parâmetros é o que está sendo procurado e como será substituido
console.log(nickNameSemNumeros)
console.log(nickNameSemZero)


let nomes = "nickolas,joao,juliana"
let arrayNomes = nomes.split(',') //O parametro é o reparador usado
console.log(arrayNomes)