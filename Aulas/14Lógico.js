// Operadores Logíco

// Operador Logíco e (&&)
//retorna TRUE se os dois operandos forem true

// console.log(true && false)


// let maiorDeIdade = true;
// let possueCarteiraDeTrabalho = false
// let podeAplicar = maiorDeIdade && possueCarteiraDeTrabalho

// console.log(podeAplicar)

//Operador Logíco ou (||)
//Retorna true se um dos operandos forem true

let maiorDeIdade = true;
let possueCarteiraDeTrabalho = false
let podeAplicar = maiorDeIdade || possueCarteiraDeTrabalho

console.log("Pode aplicar: ",podeAplicar)

//Operador Logíco not (!)
let candidatoRecusado = !podeAplicar

console.log("Candidato Recusado: ", candidatoRecusado)