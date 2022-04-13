// Faça um proggrama que leia um numero de 0 a 9999 e mostre cada um dos digitos separados.

let n = 8902
console.log(n)

console.log("unidade" ,  n / 1 % 10)
n -= (n / 1 % 10)
n /= 10
console.log("desena" ,  n / 1 % 10)
n -= (n / 1 % 10)
n /= 10
console.log("centena" ,  n / 1 % 10)
n -= (n / 1 % 10)
n /= 10
console.log("milhar" ,  n / 1 % 10)

