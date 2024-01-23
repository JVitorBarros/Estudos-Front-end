const caixa01 = document.getElementById('caixa01');
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative'];

cursos.map((elemento, posicao)=>{
    const novoElemento = document.createElement('div');
    novoElemento.setAttribute('id', 'c'+ posicao);
    novoElemento.setAttribute('class', 'curso c1');
    novoElemento.innerHTML = elemento;

    const btn_lixeira = document.createElement('img');
    btn_lixeira.setAttribute('src', './imagem/lixeira.png');
    btn_lixeira.setAttribute('class', 'btn_lixeira');
   

    btn_lixeira.addEventListener('click', (evento)=>{
        caixa01.removeChild(evento.target.parentNode);
    })

    novoElemento.appendChild(btn_lixeira);
    caixa01.appendChild(novoElemento);
})  