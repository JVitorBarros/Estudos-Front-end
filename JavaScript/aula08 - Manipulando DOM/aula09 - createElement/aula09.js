// Usando o createElement

const cursos = ['Html', 'CSS', 'JavaScript', 'PHP','React','MySQL', 'ReactNative'];
const caixa01 = document.getElementById('caixa01');

cursos.map((elemento, posicao)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', 'c'+posicao);
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML = elemento;
    caixa01.appendChild(novoElemento);
  
})
