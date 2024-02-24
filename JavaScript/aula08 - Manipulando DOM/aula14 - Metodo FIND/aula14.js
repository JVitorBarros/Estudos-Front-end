const p_array = document.querySelector('#array');
const barraPesquisa = document.querySelector('#barra-pesquisa');
const botao = document.querySelector('#botao-pesquisar');
const resultado = document.querySelector('#resultado');

const elementoArray = [1, 2, 3 , 4 ,5 ,6];
p_array.innerHTML = '['+ elementoArray +']';

botao.addEventListener('click', ()=>{
    resultado.innerHTML = 'Valor não encontrado'
    elementoArray.find((e, i)=>{
        if(e == barraPesquisa.value){
            resultado.innerHTML = `Valor existente no Array. Posição ${i}º`
            console.log(resultado)
        }
    })
    

})
