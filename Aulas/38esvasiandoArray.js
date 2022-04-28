// Esvaziando um array
let numeros = [1,2,3,4,5,6];
let outros = numeros;

// Solução 1
// numeros = [];
// console.log(numeros,outros);
// >>>[] [ 1, 2, 3, 4, 5, 6 ]

// Solução 2
// numeros.length=0;
// console.log(numeros,outros);
// >>>[] []

// Solução 3
// numeros.splice(0,numeros.length);
// console.log(numeros, outros);
// >>>[] []

// Solução 4
while (numeros.length > 0)
    numeros.pop();
console.log(numeros,outros)