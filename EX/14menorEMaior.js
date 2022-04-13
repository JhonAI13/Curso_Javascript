let numeros = [12 ,8 , 7 , 18];
var intaMaior = 0;
var intaMenor = 0;
let c = numeros.length - 1;

for (let i = 0; i <= c ; i++) {
    if (i==0){
        intaMaior = numeros[i];
        intaMenor = numeros[i]
    }
    else if (intaMaior > numeros[i]) {
        intaMaior = numeros[i]
    }
    else if (intaMenor < numeros[i]) {
        intaMenor = numeros[i]
    }
}
console.log(`O maior numero é ${intaMaior}`);
console.log(`O menor numero é ${intaMenor}`)