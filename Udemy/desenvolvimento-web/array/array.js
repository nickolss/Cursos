console.log(typeof Array, typeof new Array());
console.log(typeof []);

let aprovados = new Array("bia", "carlos", "ana");
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"]; //Notação literal
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Aria");
console.log(aprovados.length);

aprovados.sort();
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1, "Elemento1", "Elemento2");
console.log(aprovados);
