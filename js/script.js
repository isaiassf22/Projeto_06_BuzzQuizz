function PedirQuizes(){
    const promisse=axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promisse.then(receberQuizes)
    promisse.catch(erro)
}
PedirQuizes();

function receberQuizes(resposta){
    console.log(resposta)
    console.log(resposta.data)
    let containerDeQuizes=resposta.data
     let gradeQuiz=document.querySelector('.gridquizzes')
     let renderizando='' //renderizar os quizzes
    for(i=0;i<containerDeQuizes.length;i++){
            renderizando+= `<li class="quizesgeral" onclick="exibirquiz()">
            <img src="${containerDeQuizes[i].image}" data-${containerDeQuizes[i].id}>
            <p>${containerDeQuizes[i].title}</p>
        </li>
        `
        }
    
    gradeQuiz.innerHTML=renderizando
}



function erro(_errou) {
    Alert("Ops, falhou em carregar os quizzes,iremos recarregar a sua pagina em 4 segundos.");
    setInterval(window.location.reload() ,4000);
}

function exibirquiz(){
    console.log('clicou');
    let quizusuario =document.querySelector('.quizes-usuario');
    let quiztodos =document.querySelector('.conteiner-de-quizes');
    let abaquiz = document.querySelector('.div-perguntas');
    let banner = document.querySelector('.banner-superior');   
    quizusuario.style.display='none';
    quiztodos.style.display='none';
    abaquiz.classList.remove("escondido");
    banner.classList.remove("escondido");
}


