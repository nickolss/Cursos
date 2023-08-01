require('./global')

console.log(MinhaApp.saudacao())
console.log(global.MinhaApp.saudacao())

MinhaApp.nome = "Foi modificado"
console.log(global.MinhaApp.nome)