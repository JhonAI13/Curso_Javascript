// Igualdade de Objetos 

function Endereço(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereço1 = new Endereço('a','b','c');
const endereço2 = new Endereço('a','b','c');
console.log(endereço1.)
function sãoIguais(endereço1,endereço2) {
    // comparar se as propriedades são iguais
    for (let chave in endereço1) {
        console.log(chave,endereço1[chave])
    }
}

console.log(sãoIguais(endereço1,endereço2))
function temEndereçoMemoriaIguais(endereço1,endereço2) {
    // compando se a referencia do objeto aponta para o mesmo local na memoria

}