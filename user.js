function informacaoUser () {
    let nome , nascimento

    while (true) {
        nome = prompt("digite seu nome completo:")
        nascimento = parseInt(prompt("digite seu de nascimento entre 1922 e 2022:"))
        
        if (!Number.isInteger(nascimento) || nascimento < 1922 || nascimento > 2022)
        {
            alert("Ano de nascimento inválido. Por favor, Digite um valor numérico entre 1922 e 2021.")
        } else {
            break
        }
    }

    const anoAtual = 2022
  const idade = anoAtual - nascimento

  return { nome, idade }
}

const { nome, idade } = informacaoUser()
alert(`Olá, ${nome}! Em 2022, você completou ou completará ${idade} anos.`)