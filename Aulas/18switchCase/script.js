let permissão; // comum,gerente,diretor
permissão = ""
switch(permissão){
    case 'comum' :
        console.log("usuário comum");
        break
    
    case 'gerente' :
        console.log("usuário gerente");
        break
            
    case 'diretor' :
        console.log("usuário diretor");
        break
    
    default:
        console.log("Usuário não reconhecido!")
}