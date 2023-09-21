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

app.listen(8081, () => console.log("Executando Server"));
