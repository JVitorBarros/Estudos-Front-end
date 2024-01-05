const imagemSemaforo = document.getElementById('img');
const botoes = document.getElementById('botoes');
let semaforoAutoId = null;
let posicao = 0;

botoes.addEventListener('click', (evento)=>{
    const semaforoAuto = () =>{
        const cores = ['vermelho','amarelo','verde']
        let cor = cores[posicao];
        clickBotao[cor]();
        posicao++;
        if(posicao > 2){
            posicao = 0
        }
    }
    const stopAutomatico = () =>{
        clearInterval(semaforoAutoId);
    }

    const clickBotao = {
        'vermelho': () => imagemSemaforo.src = 'img/vermelho.png',
        'amarelo': () => imagemSemaforo.src = 'img/amarelo.png',
        'verde': () => imagemSemaforo.src = 'img/verde.png',
        'auto': () => semaforoAutoId = setInterval(semaforoAuto, 1000)
    }

    stopAutomatico();
    clickBotao[evento.target.id]();
})


























