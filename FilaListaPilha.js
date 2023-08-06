//Remoção com Fila

const fila = [3, 7, 9, 1, 0]

while (fila.length > 0) {
  const Remoção = fila.shift()
  console.log("Removido da fila:", Remoção)
}

console.log("---------------------------")

//Remoção com Lista

const lista = [3, 7, 9, 1, 0]

while (lista.length > 0) {
  const Remoção = lista.pop()
  console.log("Removido da lista:", Remoção)
}

console.log("---------------------------")

//Remoção com Pilha

const pilha = [3, 7, 9, 1, 0]

while (pilha.length > 0) {
  const Remoção = pilha.pop()
  console.log("Removido da pilha:", Remoção)
}
