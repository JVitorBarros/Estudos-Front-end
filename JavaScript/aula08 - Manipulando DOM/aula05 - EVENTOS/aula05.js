
const todosCursos = [...document.querySelector('.curso')]



todosCursos.map((el)=>{
    el.addEventListener("click", ()=>{
        //const el = evt.target
        el.classList.add("destaque")
    })
})


