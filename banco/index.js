function Banco (numeroConta, saldo, tipoConta, agencia) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;

    this.buscarSaldo = function() {
        return this.saldo
    };


    this.deposito = function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor} foi realizado com sucesso. Novo saldo: R$${this.saldo}`;
        } else {
            return "Valor de depósito inválido. Por favor, tente novamente!";
        }
    };



    this.saque = function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
        } else {
            return "Saldo insuficiente";
        }
    };



    this.obterNumeroDaConta = function() {
        return this.numeroConta;
    };
}


const minhaConta = new Banco (
    98765,
    1000,
    "Conta Corrente",
    "Agencia X"
);

console.log(`Número da Conta: ${minhaConta.obterNumeroDaConta()}`);
console.log(`Saldo Atual: R$${minhaConta.buscarSaldo()}`);
console.log(minhaConta.deposito(300));
console.log(minhaConta.saque(900));
console.log(`Saldo Atual: R$${minhaConta.buscarSaldo()}`);