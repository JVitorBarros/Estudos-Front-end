const caixa02 = document.getElementById('caixa02');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative' ];
const caixaEntrada = document.getElementById('caixaEntrada');
const btnAdicionarAntes = document.getElementById('btn_adicionar_antes');
const btnAdicionarDepois = document.getElementById('btn_adicionar_depois');
const btnRemover = document.getElementById('btn_remover');
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0;

const criandoCurso = (curso) =>{
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

cursos.map((elemento)=>{
    const inserindoCurso = criandoCurso(elemento);
    caixa02.appendChild(inserindoCurso)
})

const selecionarRadio =()=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    const radioSelecionado = todosRadios.filter((val)=>{
        return val.checked
    })

    return radioSelecionado[0]
}

btnAdicionarAntes.addEventListener('click', (evento)=>{
    const rs = selecionarRadio();
    if(rs != undefined ){
        if(nomeCurso.value != ''){
            const cursoSelecionado = rs.parentNode
            const addCurso = criandoCurso(nomeCurso.value)
            caixa02.insertBefore(addCurso, cursoSelecionado)
        }else{
            alert('Infome o nome do curso')
        }
    }else{
        alert('Selecione o curso')
    }
    
})

btnAdicionarDepois.addEventListener('click', (evento)=>{
    const rs = selecionarRadio();
    if(rs != undefined){
        if(nomeCurso.value != ''){
            const cursoSelecionado = rs.parentNode
            const addCurso = criandoCurso(nomeCurso.value)
            caixa02.insertBefore(addCurso, cursoSelecionado.nextSibling)
        }else{
            alert('Informe o nome do curso')
        }
    }else{
        alert('Selecione o curso')
    }
})

btnRemover.addEventListener('click', (evento)=>{
    const rs = selecionarRadio();
    if(rs != undefined){
        const cursoSelecionado = rs.parentNode
        cursoSelecionado.remove()
    }else{
        alert('Selecione o curso')
    }
    
})