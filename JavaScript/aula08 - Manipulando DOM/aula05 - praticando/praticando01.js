const caixa01 = document.querySelectorAll("#caixa01")
const caixa02 = document.querySelector("#caixa02")
const botao = document.querySelector("#botao01")
const todosCursos = [...document.querySelectorAll(".curso")]


todosCursos.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        const selecionar = evento.target
          selecionar.classList.toggle("selecionar")
    })
})

botao.addEventListener("click", ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionar")]
    cursoSelecionado.map((elemento)=>{
        caixa02.appendChild(elemento)
    })
})



