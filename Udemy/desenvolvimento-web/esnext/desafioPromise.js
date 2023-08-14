const fs = require("fs");
const path = "esnext/dados.txt";

const lerArquivo = (caminho) => {
	return new Promise((resolve) => {
		fs.readFile(caminho, (erro, dados) => {
			resolve(dados.toString());
		});
	});
};

lerArquivo(path)
    .then(console.log);
