function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(obj1.__proto__ === obj2.__proto__); //retorna TRUE

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
	console.log(`Olá, meu nome é ${this.nome}`);
};

obj1.falar();

obj2.nome = "Nickolas";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
//isso é equivalente a
//const obj3 = new MeuObjeto

console.log(MeuObjeto.__proto__ === Function.prototype) //Toda função criada pelo desenvolvedor tem como prototype Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) //O prototype de Function.prototype é Object.prototype 
