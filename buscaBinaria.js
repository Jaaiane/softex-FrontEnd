let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const valorSolicitado = 20

function buscarValor(array, valorSolicitado) {
    let valorEncontrado = false

    for (let i = 0; i < array.length; i++) {
        if (array[i] === valorSolicitado) {
            elementoEncontrado = true
            console.log(`O valor ${valorSolicitado} está na posição ${i} do array`)
            return;
        }
    }

    if (!valorEncontrado) {
        console.log(`O valor ${valorSolicitado} não foi encontrado no array`)
    }
}

buscarValor(array, valorSolicitado)

