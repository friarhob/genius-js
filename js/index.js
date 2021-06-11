const cores = {
    AZUL: 0,
    VERMELHO: 1,
    VERDE: 2,
    AMARELO: 3
}

var jogo = {
    sequencia: [],
    passo: 0,
    pontos: 0,
    ativo: false,
    jogar: false,
}

function mostraSequencia() {
    for (let cor of jogo.sequencia) {
        idDoQuadrado = ["azul", "vermelho", "verde", "amarelo"][cor];
        corDestaque = ['lightblue', 'pink', 'lightgreen', 'lightyellow'][cor];
        corOriginal = ["blue", "red", "green", "yellow"][cor]

        document.getElementById(idDoQuadrado).style.backgroundColor = corDestaque;
        setTimeout(function () {
            document.getElementById(idDoQuadrado).style.backgroundColor = corOriginal;
        }, 700);
    }
}

function novaCor() {
    return Math.floor(Math.random() * 4); //inteiro aleatório entre 0 e 3
}

function novoJogo() {
    jogo.ativo = true;
    document.getElementById("botao").disabled = true;
    jogo.sequencia = [novaCor()]
    jogo.passo = 0;
    jogo.pontos = 0;
    jogo.jogar = false;
    document.getElementById("pontuacao").innerHTML = "Pontuação: 0";
    document.getElementById("status").innerHTML = "Jogo ativo. Clique na sequência correta.";
    mostraSequencia();
}


// function verificaNovaFase() {
//     if(jogo.ativo && jogo.passo == jogo.sequencia.length)
//     {
//         jogo.pontos = jogo.passo;
//         jogo.sequencia.push(Math.floor(Math.random()*4)); //inteiro aleatório entre 0 e 3
//         jogo.passo = 0;
//     }
// }