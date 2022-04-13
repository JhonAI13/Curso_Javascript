let salario = 1000
let valorDaCasa = 3000
let vezesAPagar = 4

// tira 30% do salario
let sl = salario * 0.3
// transforma anos em meses
let ml = vezesAPagar * 12
// descobrir o valor das parcelas
let v = valorDaCasa / ml

if (v >= sl){
    console.log(`Seu financiamento não foi liberado`)
}
else {
    console.log('Seu financiamento foi aprovado')
    console.log(`Devera pagar ${v} por mes, por ${ml}meses`)
}
