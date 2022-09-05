let containerDeQuizes=''
let quizusuario =document.querySelector('.quizes-usuario');
let quiztodos =document.querySelector('.conteiner-de-quizes');
let abaquiz = document.querySelector('.div-perguntas');
let banner = document.querySelector('.banner-superior');
let apiSelecionada=''   
function PedirQuizes(){
    const promisse=axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promisse.then(receberQuizes)
    promisse.catch(erro)
}
PedirQuizes();

function receberQuizes(resposta){
     containerDeQuizes=resposta.data
     let gradeQuiz=document.querySelector('.gridquizzes')
     let renderizando='' //renderizar os quizzes
    for(i=0;i<containerDeQuizes.length;i++){
            renderizando+= `<li data-id="${containerDeQuizes[i].id}" onclick="escolherQuiz(this)">
            <img src="${containerDeQuizes[i].image}" alt="">
            <p>${containerDeQuizes[i].title}</p>
        </li>
        `
    }
    
    gradeQuiz.innerHTML=renderizando;
    



}
 // essa função liga a imagem selecionada com o quizz na api pra abrir a tela 2
 function escolherQuiz(x){
    let quizSelecionado=Number(x.dataset.id)
    console.log(quizSelecionado)
    let listaDeId=[]
    for(i=0;i<containerDeQuizes.length;i++){
        listaDeId.push(containerDeQuizes[i].id)
        if(listaDeId[i]===quizSelecionado){
            exibirquiz()
            apiSelecionada=containerDeQuizes[i]
            console.log(containerDeQuizes[i])
            //lista para embaralhar as respostas
            let listaEmbaralha1=[[containerDeQuizes[i].questions[0].answers[0].image,containerDeQuizes[i].questions[0].answers[0].text],[containerDeQuizes[i].questions[0].answers[1].image,containerDeQuizes[i].questions[0].answers[1].text],
            [containerDeQuizes[i].questions[0].answers[0].image,containerDeQuizes[i].questions[0].answers[0].text],[containerDeQuizes[i].questions[0].answers[1].image,containerDeQuizes[i].questions[0].answers[1].text]]
            
            let listaEmbaralha2=[[containerDeQuizes[i].questions[1].answers[0].image,containerDeQuizes[i].questions[1].answers[0].text],[containerDeQuizes[i].questions[1].answers[1].image,containerDeQuizes[i].questions[1].answers[1].text],
            [containerDeQuizes[i].questions[1].answers[0].image,containerDeQuizes[i].questions[1].answers[0].text],[containerDeQuizes[i].questions[1].answers[1].image,containerDeQuizes[i].questions[1].answers[1].text]]
            
            let listaEmbaralha3=[[containerDeQuizes[i].questions[2].answers[0].image,containerDeQuizes[i].questions[2].answers[0].text],[containerDeQuizes[i].questions[2].answers[1].image,containerDeQuizes[i].questions[2].answers[1].text],
            [containerDeQuizes[i].questions[2].answers[0].image,containerDeQuizes[i].questions[2].answers[0].text],[containerDeQuizes[i].questions[2].answers[1].image,containerDeQuizes[i].questions[2].answers[1].text]]
            
            listaEmbaralha1.sort(()=> Math.random()-0.5)
            listaEmbaralha2.sort(()=> Math.random()-0.5)
            listaEmbaralha3.sort(()=> Math.random()-0.5)

            banner.innerHTML=` <img src="${containerDeQuizes[i].image}">
            <p class="teste">${containerDeQuizes[i].title}</p>
            `
            abaquiz.innerHTML=`<li class="conteiner-pergunta pergunta${[i] + 1}">
            <div class="pergunta">
                <p>${containerDeQuizes[i].questions[0].title}</p>
            </div>

            <div class="grid-fotos">
                <div class="primeira opcao" data-check="${containerDeQuizes[i].questions[1].answers[0].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                    <img src="${listaEmbaralha1[0][0]}">
                    <p>${listaEmbaralha1[0][1]}</p>
                </div>
                <div class="segunda opcao" data-check="${containerDeQuizes[i].questions[1].answers[1].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                    <img src="${listaEmbaralha1[1][0]}">
                    <p>${listaEmbaralha1[1][1]}</p>
                </div> 
                <div class="terceira opcao" data-check="${containerDeQuizes[i].questions[1].answers[2].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                    <img src="${listaEmbaralha1[2][0]}">
                    <p>${listaEmbaralha1[2][1]}</p>
                </div>
                <div class="quarta opcao" data-check="${containerDeQuizes[i].questions[1].answers[3].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                    <img src="${listaEmbaralha1[3][0]}">
                    <p>${listaEmbaralha1[3][1]}</p>
                </div>
            </div>
            <li class="conteiner-pergunta">
                    <div class="pergunta">
                        <p>${containerDeQuizes[i].questions[1].title}</p>
                    </div>

                    <div class="grid-fotos">
                        <div class="primeira opcao" data-check="${containerDeQuizes[i].questions[1].answers[0].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha2[0][0]}">
                            <p>${listaEmbaralha2[0][1]}</p>
                        </div>
                        <div class="segunda opcao" data-check="${containerDeQuizes[i].questions[1].answers[1].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha2[1][0]}">
                            <p>${listaEmbaralha2[1][1]}</p>
                        </div>
                        <div class="terceira opcao" data-check="${containerDeQuizes[i].questions[1].answers[2].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha2[2][0]}">
                            <p>${listaEmbaralha2[2][1]}</p>
                        </div>
                        <div class="quarta opcao" data-check="${containerDeQuizes[i].questions[1].answers[3].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha2[3][0]}">
                            <p>${listaEmbaralha2[3][1]}</p>
                        </div>
                    </div>
                    <li class="conteiner-pergunta">
                    <div class="pergunta">
                        <p>${containerDeQuizes[i].questions[2].title}</p>
                    </div>

                    <div class="grid-fotos">
                        <div class="primeira opcao" data-check="${containerDeQuizes[i].questions[1].answers[0].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha3[0][0]}">
                            <p>${listaEmbaralha3[0][1]}</p>
                        </div>
                        <div class="segunda opcao" data-check="${containerDeQuizes[i].questions[1].answers[1].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha3[1][0]}">
                            <p>${listaEmbaralha3[1][1]}</p>
                        </div>
                        <div class="terceira opcao" data-check="${containerDeQuizes[i].questions[1].answers[2].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha3[2][0]}">
                            <p>${listaEmbaralha3[2][1]}</p>
                        </div>
                        <div class="quarta opcao" data-check="${containerDeQuizes[i].questions[1].answers[3].isCorrectAnswer}" onclick="respostaSelecionada(this)">
                            <img src="${listaEmbaralha3[3][0]}">
                            <p>${listaEmbaralha3[3][1]}</p>
                        </div>
                    </div>
    
            `
    }
    }
}

    
function erro(_errou) {
    Alert("Ops, falhou em carregar os quizzes,iremos recarregar a sua pagina em 4 segundos.");
    setInterval(window.location.reload() ,4000);
}

function exibirquiz(){ 
    quizusuario.style.display='none';
    quiztodos.style.display='none';
    abaquiz.classList.remove("escondido");
    banner.classList.remove("escondido");

}


