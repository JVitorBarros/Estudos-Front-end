const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
       const el = evento.target
        el.classList.add("destaque")
        console.log(el.id + "foi clicado")
    })
})