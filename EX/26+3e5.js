// Criar função somar que retorna a 
// soma de todos os multiplos


somar(10)

function somar(limite){
    let numero = 0
    for (i = 0; i <= limite; i++){
        if (i % 3 == 0 || i % 5 == 0 )
        numero += i
    }
    console.log(numero)
}