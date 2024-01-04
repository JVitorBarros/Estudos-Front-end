const botoes = document.getElementById('botoes');
const semaforoAutoID = null;
let posicao = 0;


botoes.addEventListener("click", (evento)=>{
    const img = document.getElementById('img');
    
    const semaforoAuto = () => {
        let cores = ['vermelho','amarelo','verde'];
        const cor = cores[posicao];
        turnOn[cor]();
        posicao++;
        if(posicao > 2){
            posicao = 0
        }
    }
    const stopAutomatico = () =>{
        clearInterval(semaforoAutoID)

    }
   
    const turnOn = {
        'vermelho': () => img.src = 'img/vermelho.png',
        'amarelo' : () => img.src = 'img/amarelo.png',
        'verde'   : () => img.src = 'img/verde.png',
        'auto'    : () => semaforoAutoID = setInterval(semaforoAuto, 1000) 
    }

    turnOn[evento.target.id]();
    turnOn[stopAutomatico()]();

    
})