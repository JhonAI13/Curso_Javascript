// Adicionando elementos
const numeros = [1,2,3];

//  Inicio
numeros.unshift(0);
console.log(numeros);
// Meio                 V se ira apagar ou não
numeros.splice(2, 0, 'a');
console.log(numeros)
// Fim
numeros.push(5);
console.log(numeros)
