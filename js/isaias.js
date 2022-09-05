function respostaSelecionada(parametro){
    console.log(containerDeQuizes)
    console.log(apiSelecionada)
    console.log(apiSelecionada)
    console.log(parametro)
    let imge=document.querySelector('.imagem')
    imge.classList.add('borda')
    if(parametro.dataset.check==='true'){
        alert('acertou')
    }
    else{
        alert('erooooooou')
    }
}