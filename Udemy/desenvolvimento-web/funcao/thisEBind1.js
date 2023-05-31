const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao) //Esse this é atributo do objeto pessoa
    }
}

const falar = pessoa.falar.bind(pessoa) //O BIND diz que o THIS sempre será do objeto pessoa
falar()
