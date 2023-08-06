let candidatoX = 0;
let candidatoY = 0;
let candidatoZ = 0;
let branco = 0;
let nulo = 0;

function votar(voto) {
  switch (voto) {
    case 1:
      candidatoX++;
      break;
    case 2:
      candidatoY++;
      break;
    case 3:
      candidatoZ++;
      break;
    case 4:
      branco++;
      break;
    default:
      nulo++;
      break;
  }
}

function obterVotoUsuario() {
  const votoUsuario = parseInt(prompt(
    "Digite o número que você deseja votar:\n(1) candidato X\n(2) candidato Y\n(3) candidato Z\n(4) voto branco\n"
  ));

  if (isNaN(votoUsuario) || votoUsuario < 1 || votoUsuario > 4) {
    alert("Voto inválido! Por favor, digite novamente.");
    return obterVotoUsuario();
  }

  return votoUsuario;
}

const votoUser = obterVotoUsuario();
votar(votoUser);

const encerrar = prompt("Deseja finalizar a votação? (sim/não)");

if (encerrar === "sim" || encerrar === "Sim") {
  alert("Votação encerrada com sucesso!");
}

let vencedor;

if (candidatoX > candidatoY && candidatoX > candidatoZ) {
  vencedor = "Candidato X";
} else if (candidatoY > candidatoX && candidatoY > candidatoZ) {
  vencedor = "Candidato Y";
} else if (candidatoZ > candidatoX && candidatoZ > candidatoY) {
  vencedor = "Candidato Z";
}

if (vencedor) {
    alert(`O vencedor é ${vencedor}`);
  } else {
    alert("Eleição sem vencedor!");
  }

console.log(`Quantidade de votos:\nCandidato X com ${candidatoX} voto(s),\nCandidato Y com ${candidatoY} voto(s),\nCandidato Z com ${candidatoZ} voto(s),\nVotos em branco com ${branco} voto(s),\nVotos nulos com ${nulo} voto(s).`);



