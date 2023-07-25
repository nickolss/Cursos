const checarBissextos = ano => ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0  

console.log(checarBissextos(2020))
console.log(checarBissextos(2100))