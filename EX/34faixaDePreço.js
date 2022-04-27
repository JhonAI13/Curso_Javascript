// faixa de preço
// é quero você crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual o mercado livre
// faixas, tooltip, minimo, maximo.


let faixas1 = [
    {tooltip: "ate R$700",minimo: 0, maximo:700},
    {tooltip: "de R$700 a R$1000",minimo: 700, maximo:1000},
    {tooltip: "de 1000 ou mais",minimo: 1000, maximo:99999},
];
// Factory function
function criarFaixaPreço(tooltip,minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreço('a', 1, 100),
    criarFaixaPreço('b', 100, 1000),
    criarFaixaPreço('b', 1000, 100000)
]

// Construction function
function faixaPreço(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}


 let faixas3 = [
    new faixaPreço('d', 10, 20),
    new faixaPreço('e', 20, 30),
    new faixaPreço('f', 30, 40),
]

console.log(faixas1);
console.log(faixas2);
console.log(faixas3);