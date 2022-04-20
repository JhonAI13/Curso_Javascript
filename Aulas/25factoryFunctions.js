const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    }, 
    capacidadeBateria: 5000,
    ligar: function() {
        console.log("Fazendo ligação")
    }
}
// JavaScrit Aula 34 - Factory Functions (Função de Fábrica)
function criarCelular (marcaCelular,tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular : marcaCelular,
        tamanhoTela : tamanhoTela, 
        capacidadeBateria, // Se o valor dos objetos forem o mesmo, pode deixar assim.
        ligar() {
            console.log("Fazendo ligação")
        }
    }
}

const celular1 =  criarCelular("LG",5.5, 5000);
console.log(celular1)