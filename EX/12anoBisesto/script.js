let ano = 1988;
// Se o ano for uniformemente divisível por 4, vá para a etapa 2. Caso contrário, vá para a etapa 5.
// Se o ano for uniformemente divisível por 100, vá para a etapa 3. Caso contrário, vá para a etapa 4.
// Se o ano for uniformemente divisível por 400, vá para a etapa 4. Caso contrário, vá para a etapa 5.
if (ano % 4 == 0){
    console.log("O ano", ano, "é bicesto, e tem 366dias")
}
else if (ano % 100 == 0){
    console.log("O ano", ano, "é bicesto, e tem 366dias")
}
else if (ano % 400 == 0){
    console.log("O ano", ano, "é bicesto, e tem 366dias");
}
else {
    console.log("O ano", ano, "é normal e tem 365 dias");
}

ano % 4 == 0 || ano % 400 == 0 || ano % 100 == 0 ?
    console.log("O ano", ano, "é bicesto, e tem 366dias"):
console.log("O ano", ano, "é normal e tem 365 dias");


if(ano % 4 == 0 || ano % 400 == 0 || ano % 100 == 0){
    console.log(`O ano ${ano} é bissexto e tem 366 dias`)
}
else {
    console.log(`O ano ${ano} não é bissexto e tem 365 dias` )
}