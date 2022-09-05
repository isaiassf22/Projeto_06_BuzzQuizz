function respostaSelecionada(parametro){
    console.log(containerDeQuizes)
    console.log(apiSelecionada)
    console.log(apiSelecionada)
    console.log(parametro)
    const bordaCheck=document.querySelector('.grid-fotos .borda')
    const seletor =parametro.childNodes[1]
    console.log(bordaCheck)

    const respostaEscolhida = document.querySelector("parametro");
    const pai = parametro.parentNode;
    for(let i=0; i < pai.children.length; i++){
        pai.children[i].classList.add('clarear');
        
    }
    parametro.classList.remove('clarear');
    

      
    if (bordaCheck===null){
        if(parametro.dataset.check==='true'){
        seletor.classList.add('borda')
        seletor.classList.add('verde')

    }
    else{
       seletor.classList.add('borda')
       seletor.classList.add('laranja')
    }
    } else{
        console.log('erooooou')
    }    
    
}   

/*if(bordaCheck!==null){
        bordaCheck.classList.remove('borda')
    }*/