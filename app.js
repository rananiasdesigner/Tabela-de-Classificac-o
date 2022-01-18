var silvio = {
    nome: "silvio",
    vitorias: 3,
    empates: 2,
    derrotas: 4,
    pontos: 9
  }
  
  var luiz = {
    nome: "luiz",
    vitorias: 3,
    empates: 3,
    derrotas: 2,
    pontos: 8
  }
  
  var marcia = {
    nome: "marcia",
    vitorias: 3,
    empates: 3,
    derrotas: 2,
    pontos: 8
  }
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
  }
  
  var jogadores = [silvio, luiz, marcia,]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i=0; i< jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
    console.log("clicou no botão vitória")
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
     exibirJogadoresNaTela(jogadores)
    
    
    console.log("clicou no botão empate")
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
     exibirJogadoresNaTela(jogadores)
    console.log("clicou no botão derrota")
  }