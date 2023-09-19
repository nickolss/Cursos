function novoElemento(tagName, classe) {
	const elem = document.createElement(tagName);
	elem.classList.add(classe);
	return elem;
}

class ConstruirBarreira {
	constructor(reversa = false) {
		this.barreira = novoElemento("div", "barreira");
		const borda = novoElemento("div", "borda");
		const corpo = novoElemento("div", "corpo");

		this.barreira.appendChild(reversa ? corpo : borda);
		this.barreira.appendChild(reversa ? borda : corpo);

		this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
	}
}

class ConstruirParDeBarreiras {
	constructor(altura, abertura, posicaoX) {
		this.elemento = novoElemento("div", "par-barreiras");

		this.barreiraSupe = new ConstruirBarreira(true);
		this.barreiraInfer = new ConstruirBarreira(false);

		this.elemento.appendChild(this.barreiraSupe.barreira);
		this.elemento.appendChild(this.barreiraInfer.barreira);

		this.sortearAbertura = () => {
			const alturaSuperior = Math.random() * (altura - abertura);
			const alturaInferior = altura - abertura - alturaSuperior;

			this.barreiraSupe.setAltura(alturaSuperior);
			this.barreiraInfer.setAltura(alturaInferior);
		};

		this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
		this.setX = (posicaoX) => (this.elemento.style.left = `${posicaoX}px`);

		this.getLargura = () => this.elemento.getClientWidth;

		this.sortearAbertura();
		this.setX(posicaoX);
	}
}

class ConstruirBarreiras {
	constructor(altura, largura, abertura, espacoEntreBarreiras, notificarPonto) {
		this.pares = [
			new ConstruirParDeBarreiras(altura, abertura, largura),

			new ConstruirParDeBarreiras(
				altura,
				abertura,
				largura + espacoEntreBarreiras
			),

			new ConstruirParDeBarreiras(
				altura,
				abertura,
				largura + espacoEntreBarreiras * 2
			),

			new ConstruirParDeBarreiras(
				altura,
				abertura,
				largura + espacoEntreBarreiras * 3
			),
		];

		const deslocamento = 3;

		this.animar = () => {
			this.pares.forEach((par) => {
				//Faz com que as barreiras se desloquem
				par.setX(par.getX() - deslocamento);

				//Quando as barreiras sairem da tela do jogo
				if (par.getX() < -par.getLargura()) {
					par.setX(par.getX() + espacoEntreBarreiras * this.pares.length);
					par.sortearAbertura();
				}

				const meio = largura / 2;
				const cruzouMeio =
					par.getX() + deslocamento >= meio && par.getX() <= meio;

				if (cruzouMeio) notificarPonto();
			});
		};
	}
}

class Passaro {
	constructor(alturaJogo) {
		let voando = false;

		this.passaro = novoElemento("img", "passaro");
		this.passaro.src = "imgs/passaro.png";

		this.getY = () => parseInt(this.passaro.style.bottom.split("px")[0]);
		this.setY = (posicaoY) => (this.passaro.style.bottom = `${posicaoY}px`);

		window.onkeydown = (event) => (voando = true);
		window.onkeyup = (event) => (voando = false);

		this.animar = () => {
			const newY = this.getY() + (voando ? 8 : -5);
			const alturaMax = alturaJogo - this.passaro.clientHeight;

			if (newY <= 0) {
				this.setY(0);
			} else if (newY >= alturaMax) {
				this.setY(alturaMax);
			} else {
				this.setY(newY);
			}
		};

		//Deixa o pássaro no meio da tela
		this.setY(alturaJogo / 2);
	}
}

class Progresso {
	constructor() {
		this.elemento = novoElemento("span", "progresso");
		this.atualizarPontos = (pontos) => {
			this.elemento.innerHTML = pontos;
		};

		this.atualizarPontos(0);
	}
}

function flappyBird() {
	let pontos = 0;

	const areaJogo = document.querySelector("[wm-flappy]");
	const alturaJogo = areaJogo.clientHeight;
	const larguraJogo = areaJogo.clientWidth;

	const progresso = new Progresso();
	const barreiras = new ConstruirBarreiras(
		alturaJogo,
		larguraJogo,
		200,
		400,
		() => {
			progresso.atualizarPontos(++pontos);
		}
	);
	const usuario = new Passaro(alturaJogo);

	areaJogo.appendChild(progresso.elemento);
	areaJogo.appendChild(usuario.passaro);

	barreiras.pares.forEach((par) => {
		areaJogo.appendChild(par.elemento);
	});

    this.start = ()=>{
        //loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            usuario.animar()
        }, 20);
    }
}

new flappyBird().start()