let containerDeQuizes=''
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
    }
    console.log(listaDeId)
    if(listaDeId.includes(quizSelecionado)===true){
        exibirquiz();
    }
}
    
function erro(_errou) {
    Alert("Ops, falhou em carregar os quizzes,iremos recarregar a sua pagina em 4 segundos.");
    setInterval(window.location.reload() ,4000);
}

function exibirquiz(quizescolhido){
   
    let quizusuario =document.querySelector('.quizes-usuario');
    let quiztodos =document.querySelector('.conteiner-de-quizes');
    let abaquiz = document.querySelector('.div-perguntas');
    let banner = document.querySelector('.banner-superior');   
    quizusuario.style.display='none';
    quiztodos.style.display='none';
    abaquiz.classList.remove("escondido");
    banner.classList.remove("escondido");

}


