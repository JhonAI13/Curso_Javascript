let a = 4
let b = 2
let c = 3


if (a + b > c & a + c > b & b + c > a){
    console.log(`Os valores ${a}cm, ${b}cm e ${c}cm, formam um triangulo.`)
    if (a == b & a == c & c == b){
        console.log('EQUILATERO')
    }
    else if (a == b || b == a || c == a || c == b) {
        console.log('ISÓSCELES')
    }
    else {
        console.log('ESCALENO')
    }
}
else{
    console.log(`Os valores ${a}cm, ${b}cm e ${c}cm, formam um não triangulo.`)
}