function respostaSelecionada(parametro){
    console.log(containerDeQuizes)
    console.log(apiSelecionada)
    console.log(apiSelecionada)
    console.log(parametro)
    const bordaCheck=document.querySelector('.grid-fotos .borda')
    const seletor =parametro.childNodes[1]
        console.log(bordaCheck)
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