// Tipo primitivos
const mensagem = "minha primeira mensagem";
console.log(typeof mensagem);
// Tipo objeto
const outraMensagem = new String(' Bom dia ');
console.log(typeof outraMensagem);
console.log(outraMensagem.length);
console.log(outraMensagem[2]);
console.log(outraMensagem.includes('dia'));
console.log(outraMensagem.startsWith(" Bom"));
console.log(outraMensagem.endsWith(' '));
console.log(outraMensagem.includes('a'));
console.log(outraMensagem.replace("Bom", "Boa"));
console.log(outraMensagem.trim());
console.log(outraMensagem.trim().split(' '));