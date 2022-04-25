// JavaScrit - Objeto edereço

// Criar um objet endereço que contem
// Rua, cidade, CEP, exibirEndereço(endereço)

// const endereço = {
//     rua: "Rua Presidente Vargas",
//     cidade: "Rio de Janeiro",
//     cep: 25758234,
//     exibirEndereço: function () {
//         console.log(`${this.rua}, ${this.cidade}, CEP: ${this.cep}`)
//     }    
// }

// endereço.exibirEndereço()

let endereço = {
        rua: "Rua Presidente Vargas",
        cidade: "Rio de Janeiro",
        cep: 25758234
}

function exibirEndereço(endereço) {
    for (let chave in endereço) {
        console.log(chave,endereço[chave])
    }
}

exibirEndereço(endereço)