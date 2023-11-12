class Mouse {
    constructor(marca, tipo, cor) {
        this.marca = marca;
        this.tipo = tipo;
        this.cor = cor;
        this.conectado = false;
    }

    clicar() {
        console.log(`Clicando com o mouse ${this.marca}`)
    }

    mover() {
        console.log(`Movendo o cursor do mouse para cima e para baixo`);
    }

    conectar() {
        this.conectado = true;
        console.log(`O mouse ${this.marca} está conectado`);
    }
}

const meuMouse = new Mouse ("Logitech", "Sem Fio" , "Rosa");
meuMouse.conectar();
meuMouse.mover();
meuMouse.clicar();