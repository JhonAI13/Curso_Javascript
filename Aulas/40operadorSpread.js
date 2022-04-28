// Conbinando e contando Arrays
const primeiro = [{id:1},2,3];
const segundo = [4,5,6];
primeiro[0].id = 10;
// Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);
// Dividir
const Dividir = combinado.slice(0,3);
console.log(Dividir)
// clonar
const clonar = combinado.slice(0);
console.log(clonar)

// Spread
// Combinar com spread
const combinado1 = [...primeiro,...segundo];
console.log(combinado1);
// Clonar com spread
const clonar1 = [...combinado1];
console.log(clonar1)