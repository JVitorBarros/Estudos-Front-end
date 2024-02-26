const p_array = document.querySelector('#array');
const barraPesquisa = document.querySelector('#barra-pesquisa');
const botao = document.querySelector('#botao-verificar');
const resultado = document.querySelector('#resultado');

const elementoArray = [16,12,10,17,15,13,11,19];
p_array.innerHTML = '['+ elementoArray +']';

botao.addEventListener('click', (evento)=>{
    const resul = elementoArray.some((e, i)=>{
        if(e < 18){
            resultado.innerHTML = `Array não conforme na ${i+1}º posição`
        }

        return e >= 18
    })

    if(resul){
        resultado.innerHTML = "OK"
    }

})
