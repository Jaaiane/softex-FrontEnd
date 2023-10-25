const nota1 = parseFloat(prompt("Digite a primeira nota (numéros entre 0 e 10):"));
const nota2 = parseFloat(prompt("Digite a segunda nota (numéros entre 0 e 10):"));
const nota3 = parseFloat(prompt("Digite a terceira nota (numéros entre 0 e 10):"));

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
    const media = (nota1 + nota2 + nota3) / 3;

    console.log("A média das notas é:" + media);

}else {
    console.log("Por favor, insira números válidos entre 0 e 10!!")
}