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
    jogar: false
}

var idsDosBotoes = ["azul", "vermelho", "verde", "amarelo"];
var coresDestaques = ['lightblue', 'pink', 'lightgreen', 'lightyellow'];
var coresOriginais = ["blue", "red", "green", "yellow"];

var numerosCores = {
    "azul": cores.AZUL,
    "amarelo": cores.AMARELO,
    "verde": cores.VERDE,
    "vermelho": cores.VERMELHO
}

const sleep = (milissegundos) => {
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

async function mostraSequencia() {
    for (var cor of jogo.sequencia) {
        await sleep(200).then(() => {
            document.getElementById(idsDosBotoes[cor]).style.backgroundColor = coresDestaques[cor];
        });
        await sleep(800).then(() => {
            document.getElementById(idsDosBotoes[cor]).style.backgroundColor = coresOriginais[cor];
        });
    }
    jogo.jogar = true;
}

function apertarBotao(corString) {
    var cor = numerosCores[corString];
    //document.getElementById(corString).style.backgroundColor = coresDestaques[cor];

    if (jogo.jogar) // ignorar cliques se não for hora de clicar
    {
        if (jogo.sequencia[jogo.passo] == cor) //clicou certo
        {
            jogo.passo++;
            if (jogo.passo == jogo.sequencia.length) // acertou a sequencia toda
            {
                jogo.sequencia.push(novaCor());
                jogo.passo = 0;
                jogo.pontos++;
                jogo.jogar = false;
                document.getElementById("pontuacao").innerHTML = "Pontuação: " + (jogo.sequencia.length - 1);
                mostraSequencia();
            }
        } else // clicou errado
        {
            document.getElementById("botao").disabled = false;
            document.getElementById("status").innerHTML = "Você errou. Fim de jogo.";
            jogo.jogar = false;
        }
    }
}

function novaCor() {
    return Math.floor(Math.random() * 4); //inteiro aleatório entre 0 e 3
}

function novoJogo() {
    document.getElementById("botao").disabled = true;
    jogo.sequencia = [novaCor()]
    jogo.passo = 0;
    jogo.pontos = 0;
    jogo.jogar = false;
    document.getElementById("pontuacao").innerHTML = "Pontuação: 0";
    document.getElementById("status").innerHTML = "Jogo ativo. Clique na sequência correta.";
    mostraSequencia();
}