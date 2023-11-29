const number1 = parseFloat(prompt("Digite o primeiro número:"));
const number2 = parseFloat(prompt("Digite o segundo número:"));

const result = number1 / number2;

try {
  if (!isFinite(result)) {
    throw new Error(
      "Resultado não é um numero finito. Possivel divisão por 0."
    );
  }

  console.log("Resultado:" + result);
} catch (erro) {
  console.error("Erro:" + erro.message);
} finally {
  console.log("o código foi executado!");
}
