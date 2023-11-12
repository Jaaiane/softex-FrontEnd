class Usuario {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    enviarMensagem(mensagem) {
        console.log(`Enviando mensagem para ${this.nome}: "${mensagem}"`);
    }

    atualizarPerfil(novosDados) {
        Object.assign(this, novosDados);
        console.log(`Perfil de ${this.nome} atualizado:`, this);      
    }

    excluirConta() {
        console.log(`Excluindo a conta de ${this.nome}.`);
    }
}

const meuUsuario = new Usuario ("João", 20, "joao@gmail.com");
meuUsuario.enviarMensagem("Olá! Como vai você?");
meuUsuario.atualizarPerfil({idade: 25, cidade:" Recife"});
meuUsuario.excluirConta()