// Encontra elementos tipos de referencia

const marcar = [
    {id:1, nome:'a'},
    {id:1, nome:'b'}
];

console.log(marcar.find(function(marca){
    return marca.nome === 'a';
}))