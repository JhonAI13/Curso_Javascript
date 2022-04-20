// Oque são objetos ?
// Chave-Valor (Key-Value pair)
let marcaCelular = 'LG';
let tamanhoTelaVertical = 155;
let tamanhoTelaHorisontal = 75;
let capacidadeBateria = 5000;

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

celular.capacidadeBateria = 10;
console.log(celular.capacidadeBateria);
celular.ligar();