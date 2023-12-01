const caixa01 = document.querySelectorAll("#caixa01")
const caixa02 = document.querySelectorAll("#caixa02")
const botao = document.querySelectorAll("#botaoCopiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        const selecionar = evento.target
        selecionar.classList.add("destaque")

    })
})
