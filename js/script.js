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
            renderizando+= `<li class="quizesgeral">
            <img src="${containerDeQuizes[i].image}" data-${containerDeQuizes[i].id}>
            <p>${containerDeQuizes[i].title}</p>
        </li>
        `
        }
    
    gradeQuiz.innerHTML=renderizando
}

function erro(_errou) {
    console.log(Ops, falhou, em, carregar, os, quizzes);
}

