class ContaBancaria {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.titular = titular;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} na conta de ${this.titular}. Novo saldo: ${this.saldo}`);
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Sacando ${valor} da conta de ${this.titular}. Saldo Disponível: ${this.saldo}`);
        } else {
            console.log(`Saldo insuficiente na conta de ${this.titular}`);
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual na conta de ${this.titular}: ${this.saldo}`);
    }
}

const minhaConta = new ContaBancaria("12345-6", 1000, "Maria");
minhaConta.depositar(200);
minhaConta.sacar(300);
minhaConta.consultarSaldo();
