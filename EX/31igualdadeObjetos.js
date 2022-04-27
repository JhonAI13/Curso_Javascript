// Igualdade de Objetos 

function Endereço(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereço1 = new Endereço('a','b','c');
const endereço2 = new Endereço('a','b','c');
const endereço3 = endereço1
function sãoIguais(endereço1,endereço2) {
    // comparar se as propriedades são iguais
    // return endereço1.rua === endereço1.rua &&
    //         endereço1.cidade === endereço2.cidade &&
    //         endereço1.cep === endereço2.cep
    for(ind in endereço1,endereço2){
        if(endereço1[ind] === endereço2[ind]){
            return true;
        }
        else return false;
    }
}

console.log(sãoIguais(endereço1,endereço2))
function temEndereçoMemoriaIguais(endereço1,endereço2) {
    // compando se a referencia do objeto aponta para o mesmo local na memoria
    return endereço1 === endereço2
}

console.log(temEndereçoMemoriaIguais(endereço1,endereço3))