const caixa01 = document.querySelectorAll("#caixa01")
const caixa02 = document.querySelector("#caixa02")
const botao01 = document.querySelector("#botao01")
const botao02 = document.querySelector("#botao02")
const todosCursos = [...document.querySelectorAll(".curso")]


todosCursos.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        const selecionar = evento.target
          selecionar.classList.toggle("selecionar")
    })
})

botao01.addEventListener("click", ()=>{
    const cursoSelecionado1 = [...document.querySelectorAll(".selecionar")]
    cursoSelecionado1.map((elemento)=>{
        caixa02.appendChild(elemento)
    })
})

botao02.addEventListener("click", ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionar")]
})



