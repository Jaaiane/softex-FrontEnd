// 1- Função sem Parâmetros
function Cumprimentacao () {
    console.log("Sejam Bem-Vindos")
}

// 2- Função com parâmetros e retorno de valor
function Soma(a,b) {
    return a + b;
}

// 3- Arrow function com parâmetros e retorno de valor
const subtrair = (a,b) => a - b;

// 4- programa que utiliza as três funções
const numero1 = 20;
const numero2 = 10;

const resultadoAdicao = Soma(numero1, numero2);
console.log(`A soma dos números ${numero1} e ${numero2} é: ${resultadoAdicao}`);

const resultadoSubtracao = subtrair(numero1, numero2);
console.log(`A subtração dos números ${numero1} e ${numero2} é: ${resultadoSubtracao}`);