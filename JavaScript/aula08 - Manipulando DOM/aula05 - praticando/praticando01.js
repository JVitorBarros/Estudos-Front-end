const caixa01 = document.querySelector("#caixa01")
const caixa02 = document.querySelector("#caixa02")
const botao = document.querySelector("#botao")
const todosCursos = [...document.querySelectorAll(".curso")]


todosCursos.map((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        const selecionar = evento.target
          selecionar.classList.toggle("selecionar")
    })
})

botao.addEventListener("click", ()=>{
    const cursoSelecionado1 = [...document.querySelectorAll(".selecionar")] 
    const cursoSelecionado2 = [...document.querySelectorAll(".curso:not(.selecionar)")]
    
    cursoSelecionado1.map((elemento)=>{
        caixa02.appendChild(elemento)
    })
    cursoSelecionado2.map((elemento)=>{
        caixa01.appendChild(elemento)
    })
})







