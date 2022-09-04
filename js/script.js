let containerDeQuizes=''
let quizusuario =document.querySelector('.quizes-usuario');
let quiztodos =document.querySelector('.conteiner-de-quizes');
let abaquiz = document.querySelector('.div-perguntas');
let banner = document.querySelector('.banner-superior');   
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
            
            console.log(containerDeQuizes[i])
            console.log(containerDeQuizes[i].image)
            banner.innerHTML=` <img src="${containerDeQuizes[i].image}">
            <p class="teste">${containerDeQuizes[i].title}</p>
            `
            abaquiz.innerHTML=`<li class="conteiner-pergunta">
            <div class="pergunta">
                <p>${containerDeQuizes[i].questions[0].title}</p>
            </div>

            <div class="grid-fotos">
                <div class="primeira opcao">
                    <img src="${containerDeQuizes[i].questions[0].answers[0].image}">
                    <p>${containerDeQuizes[i].questions[0].answers[0].title}</p>
                </div>
                <div class="segunda opcao">
                    <img src="${containerDeQuizes[i].questions[0].answers[1].image}">
                    <p>${containerDeQuizes[i].questions[0].answers[1].title}</p>
                </div>
                <div class="terceira opcao">
                    <img src="${containerDeQuizes[i].questions[0].answers[0].image}">
                    <p>${containerDeQuizes[i].questions[0].answers[0].title}</p>
                </div>
                <div class="quarta opcao">
                    <img src="${containerDeQuizes[i].questions[0].answers[1].image}">
                    <p>${containerDeQuizes[i].questions[0].answers[1].title}</p>
                </div>
            </div>
            <li class="conteiner-pergunta">
                    <div class="pergunta">
                        <p>${containerDeQuizes[i].questions[1].title}</p>
                    </div>

                    <div class="grid-fotos">
                        <div class="primeira opcao">
                            <img src="${containerDeQuizes[i].questions[1].answers[0].image}">
                            <p>${containerDeQuizes[i].questions[1].answers[0].title}</p>
                        </div>
                        <div class="segunda opcao">
                            <img src${containerDeQuizes[i].questions[1].answers[1].image}">
                            <p>${containerDeQuizes[i].questions[1].answers[1].title}</p>
                        </div>
                        <div class="terceira opcao">
                            <img src="${containerDeQuizes[i].questions[1].answers[0].image}">
                            <p>${containerDeQuizes[i].questions[1].answers[0].title}</p>
                        </div>
                        <div class="quarta opcao">
                            <img src="${containerDeQuizes[i].questions[1].answers[1].image}">
                            <p>${containerDeQuizes[i].questions[1].answers[1].title}</p>
                        </div>
                    </div>
                    <li class="conteiner-pergunta">
                    <div class="pergunta">
                        <p>${containerDeQuizes[i].questions[2].title}</p>
                    </div>

                    <div class="grid-fotos">
                        <div class="primeira opcao">
                            <img src="${containerDeQuizes[i].questions[2].answers[0].image}">
                            <p>${containerDeQuizes[i].questions[2].answers[0].title}</p>
                        </div>
                        <div class="segunda opcao">
                            <img src="${containerDeQuizes[i].questions[2].answers[1].image}">
                            <p>${containerDeQuizes[i].questions[2].answers[1].title}</p>
                        </div>
                        <div class="terceira opcao">
                            <img src="${containerDeQuizes[i].questions[2].answers[0].image}">
                            <p>${containerDeQuizes[i].questions[2].answers[0].title}</p>
                        </div>
                        <div class="quarta opcao">
                            <img src="${containerDeQuizes[i].questions[2].answers[1].image}">
                            <p>${containerDeQuizes[i].questions[2].answers[1].title}</p>
                        </div>
                    </div>
    
            `
    }
    }
    console.log(listaDeId)
    
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


