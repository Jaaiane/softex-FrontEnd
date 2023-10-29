const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));


const operador = prompt("Escolha o operador (+, -, *, /):");

let resultado;


switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;

  case "-":
    resultado = valor1 - valor2;
    break;

  case "*":
    resultado = valor1 * valor2;
    break;

  case "/":
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
      var sobra = valor1 % valor2;
    } else {
      resultado = "Divisão por zero não é permitida.";
    }
    break;

  default:
    resultado = "Operador inválido.";
}


if (typeof resultado === "number") {
  if (operador === "/") {
    console.log("Resultado: " + resultado);
    console.log("Sobra: " + sobra);
  } else {
    console.log("Resultado: " + resultado);
  }
} else {
  console.log(resultado);
}
