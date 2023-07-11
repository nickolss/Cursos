const object = {
	a: 1,
	b: 2,
	c: 3,
	soma() {
		return a + b + c;
	},
};

//Tranformar obj em JSON
console.log(JSON.stringify(object));  

//Transformar JSON em OBJ
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))