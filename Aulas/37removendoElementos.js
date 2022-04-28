// Removendo elementos
const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();


// Final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
// Inicio
console.log(numeros.shift());
console.log(numeros)
// Meio
console.log(numeros.splice(2,1));
console.log(numeros)