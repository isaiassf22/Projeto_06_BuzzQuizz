
const naoQuiz = document.querySelector('.quizes-usuario');
const seusQuizes = document.querySelector('.layout-seus-quizes');
const quizesGerais = document.querySelector('.conteiner-de-quizes');
const iniciocriar = document.querySelector('.comecocriarquiz');
const iniciocriar2 = document.querySelector('.decidaniveis');
const comecar = document.querySelector('.decidaperguntas');

let titulonovo;
let imagemnovo;
let qtdperguntas;
let qtdniveis;
caramelo={}
titulonivel = []
pontuacaonivel = []
imagemnivel = []
descricaonivel = []

let perguntas = [];


let goiaba = {}



tituloperguntas = []
corp = []
respostacorreta = []
urlrespostacorreta = []
respostaincorreta1 = []
urlrespostaincorreta1 = []
respostaincorreta2 = []
urlrespostaincorreta2 = []
respostaincorreta3 = []
urlrespostaincorreta3 = []






function criarQuizInciar(){
    comecar.style.display='flex';
    naoQuiz.style.display='none';
    seusQuizes.style.display='none';
    quizesGerais.style.display='none';
    comecar.innerHTML+=`<div class="comecocriarquiz">
    <p>Comece pelo começo</p>
    <div class="inputs">
        <input type="text" placeholder="Título do seu quiz" class="tituloquiznovo">
        <input type="text" placeholder="URL da imagem do seu quizz" class="imagemquiznovo">
        <input type="text" placeholder="Quantidade de perguntas do quizz" class="quantidadeperguntasnovo">
        <input type="text" placeholder="Quantidade de níveis do quizz" class="quantidadeniveisnovo">
        <button class="botaoCriarPerguntas" onclick="validarquizinicial()">Proseguir para criar perguntas</button>
    </div>   
</div>`;




}

function validarquizinicial(){
    const inputtitulo = document.querySelector('.tituloquiznovo');
    titulonovo = inputtitulo.value;

    const inputimagem = document.querySelector('.imagemquiznovo');
    imagemnovo = inputimagem.value;

    const inputperguntas = document.querySelector('.quantidadeperguntasnovo');
    qtdperguntas = inputperguntas.value;
    Number(qtdperguntas);

    const inputniveis = document.querySelector('.quantidadeniveisnovo');
    qtdniveis = inputniveis.value;
    Number(qtdniveis);
    
    function checkUrl(string) {
        try {
         let url = new URL(string)
         funciona = true;
       } catch(err) {
           funciona = false;
       }
     }

     checkUrl(imagemnovo);

    if(titulonovo == undefined || titulonovo == "" || titulonovo.length < 20){
        alert("O seu titulo esta vazio ou esta com menos de 20 caracteres");
    }else if(imagemnovo == undefined || imagemnovo == "" || funciona === false){
        alert("A sua imagem precisa esta no formato de url,tente novamente");
    }else if(qtdperguntas == NaN || qtdperguntas == "" || qtdperguntas < 2){
        alert("A quantidade de perguntas deve ser maior que dois e nao pode estar vazio :D");
    }else if(qtdniveis == NaN || qtdniveis == "" || qtdniveis < 2){
        alert("A quantidade de niveis deve ser maior que dois");
    }else{
        comecar.innerHTML="";
        aparecerperguntas();
    }

    console.log(titulonovo);
    console.log(imagemnovo);
    console.log(qtdperguntas);
    console.log(qtdniveis);

}

function aparecerperguntas(){

    comecar.innerHTML += `<div class="crie-pergunta">
    <p>Crie suas perguntas</p>
   </div>`;

   for(let i = 0; i < qtdperguntas; i++){
       comecar.innerHTML+=`
       <div class="perguntajaca" onclick="abrirpergunta(this)">
       <div class="perguntafechada${Number([i]) + 1} fechado">
           <p>Pergunta${Number([i]) + 1}</p>
           <img src="./images/Vector.svg">
       </div> 
                <div class="pergunta${Number([i]) + 1} aberto tamanho">
                    <p>Pergunta ${Number([i]) + 1} </p>
                    <input type="text" placeholder="Texto da pergunta" class="textoPergunta${Number([i]) + 1} textop">
                    <input type="text" placeholder="Cor de fundo da pergunta" class="corPergunta${Number([i]) + 1} corpe">
                    <p>Resposta Correta</p>
                    <input type="text" placeholder="Resposta correta" class="respostaCorreta${Number([i]) + 1} rescp">
                    <input type="text" placeholder="URL da imagem" class="urlImagemcerta${Number([i]) + 1} ">
                    <p>Repostas incorretas</p>
                    <input type="text" placeholder="Resposta incorreta 1" class="incorreta${Number([i]) + 1}">
                    <input type="text" placeholder="URL da imagem 1" class="urlIncorreta${Number([i]) + 1}">
                    <input type="text" placeholder="Resposta incorreta 2" class="incorreta${Number([i]) + 2}">
                    <input type="text" placeholder="URL da imagem 2" class="urlIncorreta${Number([i]) + 2}">
                    <input type="text" placeholder="Resposta incorreta 3" class="incorreta${Number([i]) + 3}">
                    <input type="text" placeholder="URL da imagem 3" class="urlIncorreta${Number([i]) + 3}">
                </div>
                </div> 
                `;

          
                   
   }



    comecar.innerHTML+=`<button class="botaoCriarPerguntas" onclick="guardarinputs()">Prosseguir pra criar níveis</button>`


   const primeiraperguntafechada = document.querySelector('.perguntafechada1');
  const primeirapergunta = document.querySelector('.pergunta1'); 

    primeiraperguntafechada.classList.add('lacrado');
    primeirapergunta.style.display='flex';




}



function guardarinputs(){
    for(let i = 0; i < qtdperguntas; i++){
        tituloperguntas.push(document.querySelector(`.textoPergunta${Number([i]) + 1}`.valueOf()).value);
        corp.push(document.querySelector(`.corPergunta${Number([i]) + 1}`.valueOf()).value);
        respostacorreta.push(document.querySelector(`.respostaCorreta${Number([i]) + 1}`.valueOf()).value);
        urlrespostacorreta.push(document.querySelector(`.urlImagemcerta${Number([i]) + 1}`.valueOf()).value);
        respostaincorreta1.push(document.querySelector(`.incorreta${Number([i]) + 1}`.valueOf()).value);
        urlrespostaincorreta1.push(document.querySelector(`.urlIncorreta${Number([i]) + 1}`.valueOf()).value);
        respostaincorreta2.push(document.querySelector(`.incorreta${Number([i]) + 2}`.valueOf()).value);
        urlrespostaincorreta2.push(document.querySelector(`.urlIncorreta${Number([i]) + 2}`.valueOf()).value);
        respostaincorreta3.push(document.querySelector(`.incorreta${Number([i]) + 3}`.valueOf()).value);
        urlrespostaincorreta3.push(document.querySelector(`.urlIncorreta${Number([i]) + 3}`.valueOf()).value);


        
        
    }

    objeto()
    decidaniveis();
}

function objeto(){
    for(let i = 0; i < qtdperguntas; i++){
        goiaba[i] = {
            title: tituloperguntas[i],
            color: corp[i],
            answers:[
                {
                text: respostacorreta[i],
                image: urlrespostacorreta[i],
                isCorrectAnswer: true
            },
            {
                text: respostaincorreta1[i],
                image: urlrespostaincorreta1[i],
                isCorrectAnswer: false
            },
            {
                text: respostaincorreta2[i],
                image: urlrespostaincorreta2[i],
                isCorrectAnswer: false
            },
            {
                text: respostaincorreta3[i],
                image: urlrespostaincorreta3[i],
                isCorrectAnswer: false
            }
            ],  
    }
    
}
    console.log(goiaba);
    
}




function abrirpergunta(tabela){
    const janaina = tabela.querySelector('.aberto');
    janaina.style.display='flex';

}

function decidaniveis(){
    
    comecar.innerHTML = "";
    comecar.innerHTML+=`<div class="crie-niveis">
    <p>Crie seus níveis</p>
    </div>`;

    for(let i = 0; i < qtdniveis; i++){
        comecar.innerHTML+=`
        <div class="niveisjaca" onclick="abrirnivel(this)">
        <div class="nivelfechado${Number([i]) + 1} fechado">
            <p>Nível${Number([i]) + 1}</p>
            <img src="./images/Vector.svg">
        </div> 
                 <div class="nivel${Number([i]) + 1} aberto niv">
                     <p>Nível ${Number([i]) + 1} </p>
                     <input type="text" placeholder="Título do nível" class="tituloNivel${Number([i]) + 1}">
                     <input type="text" placeholder="% de acerto minima" class="pontuacaoNivel${Number([i]) + 1}">
                     <input type="text" placeholder="URL da imagem do nível" class="urlImagemNivel${Number([i]) + 1}">
                     <textarea type="text" placeholder="Descrição do nível" class="descricaoNivel${Number([i]) + 1} textarea" cols="30" rows="10"></textarea>
                 </div>
                 </div> `;
    }

    comecar.innerHTML+=`<button class="botaoCriarPerguntas" onclick="criarquiz()">Criar Quiz</button>`;

    const primeironivelfechado = document.querySelector('.nivelfechado1');
    const primeironivel = document.querySelector('.nivel1'); 

    primeironivelfechado.classList.add('lacrado');
    primeironivel.style.display='block';

    guardarniveis();

}



function guardarniveis(){
    for(let i = 0; i < qtdniveis; i++){
        titulonivel.push(document.querySelector(`.tituloNivel${Number([i]) + 1}`.valueOf()).value);
        pontuacaonivel.push(document.querySelector(`.pontuacaoNivel${Number([i]) + 1}`.valueOf()).value);
        imagemnivel.push(document.querySelector(`.urlImagemNivel${Number([i]) + 1}`.valueOf()).value);
        descricaonivel.push(document.querySelector(`.descricaoNivel${Number([i]) + 1}`.valueOf()).value);

        caramelo[i] = {
            leveis: [{
                title: titulonivel[i],
                image: imagemnivel[i],
                text: descricaonivel[i],
                minValue: Math.ceil(pontuacaonivel[i])
            },
            ]
        }
    }

}







function abrirnivel(jubileu){
    const janaina = jubileu.querySelector('.aberto');
    janaina.style.display='flex';

}

let quizcriado;


function criarquiz(){

    quizcriado = {
        title: titulonovo,
        image: imagemnovo,
        questions: [goiaba],
        leveis: [caramelo]
    };

    comecar.innerHTML = "";
    comecar.innerHTML = `
    <ul class="finalcriar">
        <li class="textodoido">Seu quizz esta pronto!</li>
       <li class="prision">
       <div class="gradiente2"></div>
       <img src="${imagemnovo}">
        <p class="titulofinal">${titulonovo}</p>
    </li>
    <li><button class="botaoCriarPerguntas">Acessar Quizz</button></li>
    <li><p onclick="reloadpage()" class="home">Voltar para home</p></li>
    </ul>`

    console.log(quizcriado)
    const promessa = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes', quizcriado);
    console.log(quizcriado)
    promessa.then(sucesso);
    promessa.catch(erro => console.log(erro));



}

function erro(){
    alert('Erro ao criar quiz');
}

function sucesso(){
    alert('Quiz criado com sucesso');
    window.localStorage.setItem('quizusuario', quizcriado);
}

function reloadpage(){
    location.reload();
}


