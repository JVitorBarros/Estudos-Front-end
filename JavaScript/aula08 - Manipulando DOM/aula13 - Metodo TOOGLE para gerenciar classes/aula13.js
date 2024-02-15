const caixa02 = document.getElementById('caixa02');
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative' ];
const caixaEntrada = document.getElementById('caixaEntrada');
const btnAdicionarAntes = document.getElementById('btn_adicionar_antes');
const btnAdicionarDepois = document.getElementById('btn_adicionar_depois');
const btnRemover = document.getElementById('btn_remover');
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0;

const selecaoUnica = () =>{
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    cursoSelecionado.map((evento)=>{
        evento.classList.remove('selecionado')
    })
}

const criandoCurso = (curso) =>{
    const containerCursoAdd = document.createElement('aside');
    containerCursoAdd.setAttribute('class', 'containerAdd');
    containerCursoAdd.setAttribute('id', 'container' + indice );

    const cursosAdd = document.createElement('div');
    cursosAdd.setAttribute('id', 'c' + indice);
    cursosAdd.setAttribute('class', 'curso c1');
    cursosAdd.innerHTML = curso;
    containerCursoAdd.appendChild(cursosAdd);

//--------------- METODO TOGGLE SENDO APLICADO -------------
    cursosAdd.addEventListener('click', (evento)=>{
        selecaoUnica()
        evento.target.classList.toggle('selecionado')
    })

//----------------------------------------------------------  

    return cursosAdd
}

cursos.map((elemento)=>{
    const inserindoCurso = criandoCurso(elemento);
    caixa02.appendChild(inserindoCurso)
})

const CursoSelecionado =()=>{
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    return cursoSelecionado[0]
}

btnAdicionarAntes.addEventListener('click', (evento)=>{
    const cs = CursoSelecionado();
    if(cs != undefined ){
        if(nomeCurso.value != ''){
            const addCurso = criandoCurso(nomeCurso.value)
            caixa02.insertBefore(addCurso, cs)
        }else{
            alert('Infome o nome do curso')
        }
    }else{
        alert('Selecione o curso')
    }
    
})

btnAdicionarDepois.addEventListener('click', (evento)=>{
    const cs = CursoSelecionado();
    if(cs != undefined){
        if(nomeCurso.value != ''){
            const addCurso = criandoCurso(nomeCurso.value)
            caixa02.insertBefore(addCurso, cs.nextSibling)
        }else{
            alert('Informe o nome do curso')
        }
    }else{
        alert('Selecione o curso')
    }
})

btnRemover.addEventListener('click', (evento)=>{
    const cs = CursoSelecionado();
    if(cs != undefined){
        cs.remove()
    }else{
        alert('Selecione o curso')
    }
    
})