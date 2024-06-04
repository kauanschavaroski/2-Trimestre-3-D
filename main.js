const caixaprincipal=document.querySelector(".caixa-principal");
const caixaperguntas=document.querySelector(".caixa-perguntar");
const caixaalternativas=document.querySelector(".caixa-alternativas");
const caixaresultado=document.querySelector(".caixa-resultado");
const textoresultado=document.querySelector(".texto-resultado");

constperguntas=[
    {
        enunciado:"quem é mais bonito cr7 ou messi?",
        alternativas:[
           "cr7",
           "messi",
        ]
       },
       {
        enunciado:"quem joga melhor cr7 ou messi?",
        alternativas:[
           "cr7",
           "messi",
        ]
       },
       {
        enunciado:"quem é mais humilde?",
        alternativas:[
           "cr7",
           "messi",
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







    </main>
