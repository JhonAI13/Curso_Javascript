// Criar função para mostrar numeros primos

// Primos
// compostos

exibirNumerosPrimos(15);

// function exibirNumerosPrimos(limite) {
//     for (let i = 1; i <= limite; i++){
//         let teste = numeroPrimo(i)
//         if (teste == 2) {
//             console.log(i)
//         }
//     }
// }

// function numeroPrimo (numero) {
//     let num = 0
//     for (let s = numero; s >= 1; s--){
//         if (numero % s == 0){
//             num += 1
//         }
//     }
//     return num
// }

function exibirNumerosPrimos (limite) {
    for (let numero = 2; numero <= limite; numero++){
        let teste = ehPrimo(numero);
        if(teste) console.log(numero)
    }
}

function ehPrimo (numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0) {
            return false
        }
    }
    return true

}