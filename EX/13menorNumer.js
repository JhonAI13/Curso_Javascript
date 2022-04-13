let numeros = [12 ,8 , 7 , 18];
var inta = 0;
let c = numeros.length - 1;

for (let i = 0; i <= c ; i++) {
    if (i==0){
        inta = numeros[i]
    }
    else if (inta > numeros[i]) {
        inta = numeros[i]
    }
    // i == 0 ? 
    //     inta = numeros[i] : 
    // inta > numeros[i] ? 
    //     inta = numeros[i]: 
    // NaN;
}
console.log('O menor numero é', inta)