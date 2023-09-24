import express from "express";
import bodyparser from "body-parser";
import multer from "multer";

const app = express();
app.use(express.static(".")); //Funciona como o live server, exibindo os arquivos estáticos
app.use(bodyparser.urlencoded({ extended: true })); //Qualquer requisição que chegar será transformada para ter um "corpo"
app.use(bodyparser.json());

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./upload");
	},
	filename: (req, file, callback) => {
		callback(null, `${Date.now()}_${file.originalname}`);
	},
});

const upload = multer({
	storage,
}).single("arquivo");

app.post("/upload", (req, resp, next) => {
	upload(req, resp, (erro) => {
		if (erro) {
			return resp.send("Ocorreu um erro");
		}

		resp.end("Concluido com Sucesso");
	});
});

app.post("/formulario", (req, resp, next) => {
	resp.send({
		...req.body,
		id: 1,
	});
});

app.get("/parOuImpar/:numero", (req, resp, next) => {
	//Para pegar dados do front com express pode
	// req.body
	// req.query
	// req.params  //Mais fácil que query
	const par = parseInt(req.query.numero) % 2 === 0;
	resp.send({
		resultado: par ? "par" : "impar",
	}); 
});

app.listen(8081, () => console.log("Executando Server"));
