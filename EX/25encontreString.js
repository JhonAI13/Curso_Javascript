// Cria um método para ler propriedade de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse objeto 

const filme = {
    titulo : 'vingadores',
    ano : 2018,
    diretor : 'lucas',
    personagem : 'thor'
}
exibirPropriedades(filme)
function exibirPropriedades(obj){
    for (let chave in obj) {
        if (typeof obj[chave] === "string")
            console.log(chave, obj[chave])
    }
}