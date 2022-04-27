// Construtor function

// Criar um objeto postagem
// titulo, mensagem, autor, vizualização, comentarios, estaaovivo

function Postagem(titulo,mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor
    this.vizualizações = 0,
    this.comentarios = [
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    
    this.estaAoVivo = function() {
        return true
    }
}

const postagem1 = new Postagem("a",'b','b');
console.log(postagem1);
console.log(postagem1.estaAoVivo())