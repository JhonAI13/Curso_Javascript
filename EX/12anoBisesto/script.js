let ano = 2001;
// Se o ano for uniformemente divisível por 4, vá para a etapa 2. Caso contrário, vá para a etapa 5.
// Se o ano for uniformemente divisível por 100, vá para a etapa 3. Caso contrário, vá para a etapa 4.
// Se o ano for uniformemente divisível por 400, vá para a etapa 4. Caso contrário, vá para a etapa 5.
if (ano % 4 == 0){
    if (ano % 100 == 0){
        if (ano % 400 == 0){
            console.log("O ano", ano, "é bicesto, e tem 366dias");
        }
    }
}
else{
    console.log("O ano", ano, "é normal e tem 365 dias");
}

ano % 4 == 0 ?
    ano % 100 == 0 ?
        ano % 400 == 0 ? 
            console.log("O ano", ano, "é bicesto, e tem 366 dias"):
        NaN: 
    NaN:
console.log("O ano", ano, "é normal e tem 365 dias");


