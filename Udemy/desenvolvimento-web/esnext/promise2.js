// setTimeout(() => {
// 	console.log("Executando Callback");

// 	setTimeout(() => {
// 		console.log("Executando Callback");

// 		setTimeout(() => {
// 			console.log("Executando Callback");
// 		}, 2000);
// 	}, 2000);
// }, 2000);

const esperarPor = (tempo = 2000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Executando Promise");
			resolve("Vish");
		}, tempo);
	});
};

esperarPor(3000)
	.then(() => esperarPor())
	.then(esperarPor());
