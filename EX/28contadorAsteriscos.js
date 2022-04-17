// Criar uma função que exiba a quandidade do * 
// Qua aquela linha possui 

exibirNumerosPrimos(5);

function exibirNumerosPrimos(linhas) {
    const str = '*'
    let asterisco = '*'
    for (let i = 0; i <= linhas - 1; i++){
        console.log(asterisco)
        asterisco += str
    }
}