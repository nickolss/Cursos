let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function uneVetores(vetor1, vetor2) {
	vetor1.push(...vetor2);
    return vetorPilha
}

console.log(uneVetores(vetorPilha, vetorAdiciona))
''