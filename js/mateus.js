
const naoQuiz = document.querySelector('.quizes-usuario');
const seusQuizes = document.querySelector('.layout-seus-quizes');
const quizesGerais = document.querySelector('.conteiner-de-quizes');
const iniciocriar = document.querySelector('.comecocriarquiz');
const iniciocriar2 = document.querySelector('.decidaniveis');
const comecar = document.querySelector('.comecar');

let titulo;
let imagem;
let qtdperguntas;
let qtdniveis;



let novoquiz = {
	title: "titulo",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}





function criarQuizInciar(){

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
        <button class="botaoCriarPerguntas" onclick=" validarquizinicial()">Proseguir para criar perguntas</button>
    </div>   
</div>`;




}

function validarquizinicial(){
    const inputtitulo = document.querySelector('.tituloquiznovo');
    titulo = inputtitulo.value;

    const inputimagem = document.querySelector('.imagemquiznovo');
    imagem = inputimagem.value;

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

     checkUrl(imagem);

    if(titulo == undefined || titulo == "" || titulo.length < 20){
        alert("O seu titulo esta vazio ou esta com menos de 20 caracteres");
    }else if(imagem == undefined || imagem == "" || funciona === false){
        alert("A sua imagem precisa esta no formato de url,tente novamente");
    }else if(qtdperguntas == NaN || qtdperguntas == "" || qtdperguntas < 2){
        alert("A quantidade de perguntas deve ser maior que dois e nao pode estar vazio :D");
    }else if(qtdniveis == NaN || qtdniveis == "" || qtdniveis < 2){
        alert("A quantidade de niveis deve ser maior que dois");
    }else{
        comecar.innerHTML="";
        aparecerperguntas();
    }
}

function aparecerperguntas(){

    comecar.innerHTML += `<div class="crie-pergunta">
    <p>Crie suas perguntas</p>
   </div>`;

   for(let i = 0; i < qtdperguntas; i++){
       comecar.innerHTML+=`<div class="decidaniveis" onclick="abrirpergunta(this)">
       <div class="pergunta${[i]}">
           <p>Pergunta ${Number([i]) + 1}</p>
           <img src="./images/Vector.svg">
       </div> 
                <div class="pergunta ${Number([i]) + 1} aberto">
                    <p>Pergunta ${Number([i]) + 1} </p>
                    <input type="text" placeholder="Texto da pergunta" class="textoPergunta${Number([i]) + 1}">
                    <input type="text" placeholder="Cor de fundo da pergunta" class="corPergunta${Number([i]) + 1}">
                    <p>Resposta Correta</p>
                    <input type="text" placeholder="Resposta correta" class="respostaCorreta${Number([i]) + 1}">
                    <input type="text" placeholder="URL da imagem" class="urlImagemcerta${Number([i]) + 1}">
                    <p>Repostas incorretas</p>
                    <input type="text" placeholder="Resposta incorreta 1" class="incorreta${Number([i]) + 1}">
                    <input type="text" placeholder="URL da imagem 1" class="urlIncorreta${Number([i]) + 1}">
                    <input type="text" placeholder="Resposta incorreta 2" class="incorreta${Number([i]) + 2}">
                    <input type="text" placeholder="URL da imagem 2" class="urlIncorreta${Number([i]) + 2}">
                    <input type="text" placeholder="Resposta incorreta 3" class="incorreta${Number([i]) + 3}">
                    <input type="text" placeholder="URL da imagem 3" class="urlIncorreta${Number([i]) + 1}">
                </div> `;
   }
}


