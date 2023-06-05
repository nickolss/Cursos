function verificarSituacao(nota1, nota2, nota3) {
    this.mediaPonderada = 0
    if (nota1 > nota2 && nota1 > nota3) {
        mediaPonderada = [nota1 * 4 + nota2 * 3 + nota3 * 3] / (4 + 3 + 3);
    }else if(nota2 > nota1 && nota2 > nota3){
        mediaPonderada = [nota2 * 4 + nota1 * 3 + nota3 * 3] / (4 + 3 + 3);
    }else{
        mediaPonderada = [nota3 * 4 + nota1 * 3 + nota2 * 3] / (4 + 3 + 3);
    }

    if(this.mediaPonderada >= 5){
        console.log(`Você foi aprovado com as notas ${nota1}, ${nota2} e ${nota3} e a média ${this.mediaPonderada}`)
    }else{
        console.log(`Você foi reprovado com as notas ${nota1}, ${nota2} e ${nota3} e a média ${this.mediaPonderada}`)
    }
}

verificarSituacao(2 , 5 , 5)