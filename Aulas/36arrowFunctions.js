// Arrow functions
const marcar = [
    {id:1, nome:'a'},
    {id:1, nome:'b'}
];

console.log(marcar.find((marca)=>marca.nome === 'a'))
console.log(marcar.find(marca=>marca.nome === 'a'))