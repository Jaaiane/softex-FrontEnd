class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.motorLigado = false;
        this.velocidadeAtual = 0;
    }

    ligar() {
        this.motorLigado = true;
        console.log(`O motor do ${this.marca} foi ligado`)
    }

    desligar() {
        this.motorLigado = false;
        this.velocidadeAtual = 0;
        console.log(`O motor do ${this.marca} foi desligado`);
    }

    acelerar(velocidade) {
        if (this.motorLigado) {
            this.velocidadeAtual += velocidade;
            console.log(`Acelerando o ${this.marca} para ${this.velocidadeAtual}Km/h.`);
        } else {
            console.log(`O motor do ${this.marca} está desligado. Ligue o motor para poder acelerar!`);
        }
    }
}


const meuCarro = new Carro ("JEEP", "Commander", "Preto" );
meuCarro.ligar();
meuCarro.acelerar(50);
meuCarro.desligar();