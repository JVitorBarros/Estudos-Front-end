const todosCursos = [...document.getElementsByClassName("curso")]
const todosC1 = [...document.getElementsByClassName("c1")]
const todosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByTagName()[0]

console.log(todosCursos)
console.log(todosC1)
console.log(todosC2)
console.log(cursoEspecial)

todosC1.map((el) => {  // adicionando uma classe 'destaque' em todosC1
    el.classList.add("destaque")
})