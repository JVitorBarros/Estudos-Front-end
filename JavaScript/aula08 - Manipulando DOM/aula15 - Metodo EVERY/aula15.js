const p_array = document.querySelector('#array');
const barraPesquisa = document.querySelector('#barra-pesquisa');
const botao = document.querySelector('#botao-verificar');
const resultado = document.querySelector('#resultado');

const elementoArray = [25, 20, 30 , 24 ,15 ,26];
p_array.innerHTML = '['+ elementoArray +']';

botao.addEventListener('click', (evento)=>{
    const resul = elementoArray.every((e, i)=>{
        if(e < 18){
            resultado.innerHTML = `Array não conforme na ${i+1}º posição`
        }

        return e >= 18
    })

    if(resul){
        resultado.innerHTML = "OK"
    }

})
