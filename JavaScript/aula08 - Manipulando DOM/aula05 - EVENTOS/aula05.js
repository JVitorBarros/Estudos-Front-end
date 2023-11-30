const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        el = evento.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
        
    })
})