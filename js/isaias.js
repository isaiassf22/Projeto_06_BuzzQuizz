function respostaSelecionada(parametro){
    console.log(containerDeQuizes)
    console.log(apiSelecionada)
    console.log(apiSelecionada)
    console.log(parametro)
    const bordaCheck=document.querySelector('.borda')
    const seletor =parametro.childNodes[1]
    if(parametro.dataset.check==='true'){
        seletor.classList.add('borda-verde')

    }
    else{
       seletor.classList.add('borda-laranja')
    }
    const respostaEscolhida = document.querySelector("parametro");
    const pai = parametro.parentNode;
    for(let i=0; i < pai.children.length; i++){
        pai.children[i].classList.add('clarear');
    }
    parametro.classList.remove('clarear');
}

/*if(bordaCheck!==null){
        bordaCheck.classList.remove('borda')
    }*/