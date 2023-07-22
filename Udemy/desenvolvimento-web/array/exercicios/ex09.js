const repetir = (coisaRepetida, vezes) => {
    let array = []

    for (let i = 0; i < vezes; i++) {
        array.push(coisaRepetida)
    }

    return array
};

console.log(repetir("Código" , 2))
console.log(repetir(7 , 3))