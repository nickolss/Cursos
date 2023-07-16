const quaseArray = {
	0: "Rafael",
	1: "Ana",
	2: "Bia",
};

console.log(quaseArray);

Object.defineProperty(quaseArray, "toString", {
	value: function () {
		Object.values(this);
	},
	enumerable: false,                            
});


console.log(quaseArray[0])