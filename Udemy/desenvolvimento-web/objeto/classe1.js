class Lancamento {
	constructor(nome = "Genérico", valor = 0) {
		this.nome = nome;
		this.valor = valor;
	}
}

class CicloFinanceiro {
	constructor(mes, ano) {
		this.mes = mes;
		this.ano = ano;
		this.lancamentos = [];
	}

	adicionarLancamentos(...lancamentos) {
		lancamentos.forEach(element => thwis.lancamentos.push(element));
	}

	sumario() {
		let valorConsolidado = 0;
		this.lancamentos.forEach((element) => {
			valorConsolidado += element.valor;
		});

		return valorConsolidado;
	}
}


const salario = new Lancamento("Salario" , 15000)
const contaLuz = new Lancamento("Luz" , -250)

const Contas = new CicloFinanceiro(7 , 2023)
Contas.adicionarLancamentos(salario, contaLuz)
console.log(Contas.sumario())