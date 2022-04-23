// camelCase umDoisTresQuatro
// function criarCelular (marcaCelular,tamanhoTela, capacidadeBateria) {
//     return {
//         marcaCelular : marcaCelular,
//         tamanhoTela : tamanhoTela, 
//         capacidadeBateria, // Se o valor dos objetos forem o mesmo, pode deixar assim.
//         ligar() {
//             console.log("Fazendo ligação")
//         }
//     }
// }

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }
}
const celular = new Celular("asus",5.5,5000);
console.log(celular);
celular.ligar()