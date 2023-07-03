const a = 1;
const b = 2;
const c = 3;

//Antes do Ecmascript 6
const obj1 = {
	a: a,
	b: b,
	c: c,
};

//Depois do Ecmascript 6
const obj2 = {
	a,
	b,
	c,
};

const nomeAtributo = "nota";
const valorAtributo = 10.0;

const obj3 = {};
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj5 = {
    funcao1(){

    }
}