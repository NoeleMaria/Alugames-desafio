let numeroJogosAlugados = 1; //Já se conta 1, pois já está definido no HTML

function contarJogosAlugadosNoMomento () {
    console.log(`Total de jogos alugados: ${numeroJogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        numeroJogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');  
        botao.textContent = 'Devolver';
        numeroJogosAlugados++;
    }
    contarJogosAlugadosNoMomento();
}

