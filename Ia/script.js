const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com as olimpíadas de Paris 2024  tema ficou muito popular, muitos jogos, muitas modalidades, e por trás detudo isso tem uma história muito legal.",
        alternativas: [
            {
                texto: "Quero saber mais!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Que incrível!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Mas antes de te mostrar a história toda, sabia que...",
        alternativas: [
            {
                texto: "Em Paris 2024 o breaking foi adicionado como mais um esporte olímpico!",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Foi a olimpída com mias participação de mulheres!",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "No geral sabemos algumas coisas como, que a olimpíadas surgiu na Grécia, mas você sabia que...",
        alternativas: [
            {
                texto: "A primeira edição dos Jogos Olímpicos modernos foi realizada na cidade de Atenas, em 1896. Participaram 14 países e 241 atletas homens, pois as mulheres eram proibidas de competir. ",
                afirmacao: "Atletismo, ciclismo, esgrima, ginástica, halterofilismo, luta, natação e tênis foram as modalidades participantes."
            },
            {
                texto: "Atletismo, ciclismo, esgrima, ginástica, halterofilismo, luta, natação e tênis foram as modalidades participantes.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Vamos conhecendo ainda mais sobre essa competição maravilhosa!",
        alternativas: [
            {
                texto: "Desde seu início, as Olimpíadas só não foram realizadas nos anos de 1916, por causa da Primeira Guerra Mundial, e em 1940 e 1944, devido à Segunda Guerra Mundial.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Em 2016 na olimpíada do Rio de Janeiro, mais de 10 mil atletas competiram em modalidades esportivas, com golf e rúgbi voltando aos jogos.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Vamos conhecer algumas curiosidades!",
        alternativas: [
            {
                texto: "Maria Lenk foi a primeira mulher brasileira a competir em uma Olimpíada, no ano de de 1932, na cidade estadunidense de Los Angeles.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "A primeira vez que o evento foi transmitido via satélite pela televisão foi nos jogos de Roma, em 1960. Na ocasião, mais de 200 milhões de pessoas assistiram às competições em 18 países europeus.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Por fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
