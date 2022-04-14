// Velocidade máxima de até 70
// a cada 5km acima de limite você ganha 1 ponto 
// caso pontos maior que 11 -> "Carreira Suspendida"
const resultado = verificaVelocidade(89);
console.log(resultado)

function verificaVelocidade(entrada){
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if (typeof entrada !== "number")
        return "Não é um número";
    else if (entrada <= velocidadeMaxima)
        return "ok";
    else if (entrada >= 130){
            return "Carteira Suspensa.";
        }
    const pontos = (entrada - velocidadeMaxima) / kmPorPonto;

    return `Pontos:${Math.floor(pontos)}`
} 