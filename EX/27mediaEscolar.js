// Exercício noa escolar
// Obter a media a partir de um array 

// 0 -59    = F
// 60-69    = D 
// 70-79    = C
// 80-89    = B
// 90-100   = A 

const array = [77, 99, 50]

console.log(mediaDoAluno(array))

// function mediaDoAluno(notas) {
//     const tamanhoArray = notas.length;
//     let somaNotas = 0
//     for (let i = 0; i <= tamanhoArray - 1; i++) {
//         somaNotas += notas[i]
//     }
//     const media = somaNotas / tamanhoArray
//     const converção = {
//         60: 'D',
//         70: 'C',
//         80: 'B',
//         90: 'A' 
//     }
//     if (media <= 59) 
//         return "F"
//     else if ( media == 100){
//         return "A"
//     }
//     else {
//         for(let i = 60; i <= 100; i += 10){
//             if (media <= (i + 9) & media >= i)
//                 return converção[i]
//         }
//     }

// }

function mediaDoAluno(notas) {
    const media = calcularMedia(notas)
    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";
    return "A"
}

function calcularMedia(array){
    
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}