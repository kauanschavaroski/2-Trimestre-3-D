const caixaprincipal=document.querySelector(".caixa-principal");
const caixaperguntas=document.querySelector(".caixa-perguntar");
const caixaalternativas=document.querySelector(".caixa-alternativas");
const caixaresultado=document.querySelector(".caixa-resultado");
const textoresultado=document.querySelector(".texto-resultado");

constperguntas=[
    {
        enunciado:"quem é mais bonito cr7 ou messi?",
        alternativas:[
            {
           texto: "cr7",
afirmação: "afirmação",-[8
            },
                         {
           texto: "messi",
        afirmação: "afirmação",
       },
                         ] ;
        enunciado:"quem joga melhor cr7 ou messi?",
        alternativas:[
           texto: "cr7",
           texto: "messi",
       },
       {
        enunciado:"quem é mais humilde?",
        alternativas:[
           texto: "cr7",
            texto: "messi",
        ]
       },
       {
        enunciado:"quem é mais rico?",
        alternativas:[
           "cr7",
           "messi",
        ]
       },
       {
        enunciado:"quem é mais famoso?",
        alternativas:[
           "cr7",
           "messi",
        ]
       },
      ];

let atual=0;
let perguntasAtual;

function mostraPerguntas(){
   perguntasAtual=perguntas[atual];
   caixaperguntas.textConstent = perguntasAtual.enunciado;
}

mostraPerguntas();


<li class = "itens">pontualidade</li>
<li class = "itens">limpeza</li>
enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
 /*    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   */ 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
 /* caixaAlternativas.textContent = ""; */
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao; /* mudar para opcaoSelecionada.afirmacao*/
            historiaFinal = afirmacoes; /* += afirmacoes + " "; */
            atual++;
            mostraPergunta();
      }
/*
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}
*/
mostraPergunta();






    </main>
