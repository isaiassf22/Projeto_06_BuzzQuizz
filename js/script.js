function PedirQuizes(){
    const promisse=axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promisse.then(receberQuizes)
}
PedirQuizes();

function receberQuizes(resposta){
    console.log(resposta)
    console.log(resposta.data)
    let containerDeQuizes=resposta.data
     let gradeQuiz=document.querySelector('.gridquizzes')
     let renderizando='' //renderizar os quizzes
    for(i=0;i<containerDeQuizes.length;i++){
            renderizando+= `<li>
            <img src="${containerDeQuizes[i].image}" alt="">
            <p>${containerDeQuizes[i].title}</p>
        </li>
        `
        }
    console.log(renderizando)
    gradeQuiz.innerHTML=renderizando
}

