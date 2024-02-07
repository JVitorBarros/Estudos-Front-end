const caixa02 = document.getElementById('caixa02');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative' ];
const caixaEntrada = document.getElementById('caixaEntrada');
const btnAdicionarAntes = document.getElementById('btn_adicionar_antes');
const btnAdicionarDepois = document.getElementById('btn_adicionar_depois');
const btnSelecionar = document.getElementById('btn_selecao');
const btnRemover = document.getElementById('btn_remover');

let indice = 0
const criandoNovoCurso = (curso) =>{
    const containerCursoAdd = document.createElement('aside');
    containerCursoAdd.setAttribute('class', 'containerAdd');
    containerCursoAdd.setAttribute('id', 'container' + indice );

    const cursosAdd = document.createElement('div');
    cursosAdd.setAttribute('id', 'c' + indice);
    cursosAdd.setAttribute('class', 'curso c1');
    cursosAdd.innerHTML = curso;
    containerCursoAdd.appendChild(cursosAdd);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'radio');
    checkbox.setAttribute('name', 'checkbox');
    cursosAdd.appendChild(checkbox);

    return cursosAdd

}


cursos.map((elemento, posicao)=>{
    const novoElemento = criandoNovoCurso(elemento)
    caixa02.appendChild(novoElemento);
    indice++

})

const selecionarRadio=()=>{
    const todosRadios = [...document.querySelectorAll('input[type = radio]')]

    const radioSelecionado = todosRadios.filter((val, ind, arr)=>{
        return val.checked
    })

    return radioSelecionado[0]
    
}

btnAdicionarAntes.addEventListener('click', (evento)=>{
    const rs = selecionarRadio()
    const cursoSelecionado = rs.parentNode
    
})

btnRemover.addEventListener('click', (evento)=>{
    const rs = selecionarRadio()
    if(rs != undefined ){
        const removerCurso = rs.parentNode
        removerCurso.remove()
    }else{
        alert('Selecione o curso que deseja remover')
    }
        
})

btnSelecionar.addEventListener("click", (evento)=>{
    const rs = selecionarRadio();
    if(rs != undefined){
        
        const cursoSelecionado = rs.parentNode.firstChild.textContent

        alert(`Curso selecionado: ${cursoSelecionado}`)
    }else{
        alert('Selecione o curso')
    }
})
