const caixa01 = document.querySelector("#caixa01")
const cursos = [...document.querySelectorAll(".curso")]

caixa01.addEventListener("click", ()=>{
    alert("clicou")

})
cursos.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        evento.stopPropagation()
    })
})