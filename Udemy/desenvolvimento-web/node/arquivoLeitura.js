const fs = require("fs");

const caminhoDoArquivo = __dirname + "/arquivo.json";

//Síncrono
const conteudo = fs.readFileSync(caminhoDoArquivo, "utf-8");
console.log(conteudo);

//Assíncrono
fs.readFile(caminhoDoArquivo, "utf-8", (erro, conteudoDoArquivo) => {
	const config = JSON.parse(conteudo);
	console.log(`${config.db.host}:${config.db.port}`);
});

const config = require("./arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (erro, arquivos) => {
	console.log(arquivos);
});
