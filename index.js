const vagas = []

function listarVagas(){
  const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
    //1. nome, (x candidatos)
    textoFinal += indice +". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga(){
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe a descrição da vaga")
  const dataLimite = prompt("Informe a data limite para candidatura (dd/mm/aaa)a")
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" + 
    "Nome: " + nome + 
    "\nDescrição: " + descricao +
    "\nData Limite: " + dataLimite)

    if(confirmacao){
      const novaVaga = {nome, descricao, dataLimite, candidatos: []}
      vagas.push(novaVaga)
      alert("Vaga Criada com Sucesso!")
    }
}

function exibirVaga(){
  const indice = prompt("Informe o índice da vaga que deseja exibir:")
  
  if(indice >= vagas.length || indice < 0){
    alert("Essa vaga não existe, escolha outra opção")
    return
  }

  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + "\n - " + candidato
  }, "")

  alert(
    "Vaga nº " + indice + 
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite + 
    "\nQuanditadade de Candidatos: " + vaga.candidatos.length +
    "\nCandidatos Inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
  const candidato = prompt("Infome o nome do(a) candidato(a):")
  const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever")
  const vaga = vagas[indice]
  const confirmacao = confirm(
    "Deseja inscrever  o(a) candidato(a) " + candidato + " na vaga " + indice + "?\n" +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada com sucesso!")
  }
}

function excluirVaga(){
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga?" + indice + "?\n" +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Inscrição excluída com sucesso!");
  }
}

function exibirMenu(){
  const opcoes = prompt(
    "Cadastro de Vagas de Emprego" + 
    "\n\nEscolha uma das opções: " +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a) em uma vaga" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair" 
  )

  return opcoes
}

function executar(){
  let opcoes = ""

  do{
    opcoes = exibirMenu()

    switch(opcoes){
      case "1":
        listarVagas()
        break

      case "2":
        novaVaga()
        break

      case "3":
        exibirVaga()
        break

      case "4":
        inscreverCandidato()
        break

      case "5":
        excluirVaga()
        break

      case "6":
        alert("Encerrando...")
        break

      default:
        alert("Opção Inválida")
    }

  } while(opcoes !== "6")
}

executar()