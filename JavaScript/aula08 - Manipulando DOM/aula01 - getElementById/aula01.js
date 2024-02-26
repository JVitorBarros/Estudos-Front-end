"use strict"
//      Aprendendo o Método getElementByid. Manipulando DOM

const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")
const divc6 = document.getElementById("c6")

const arrayElementos = [divc1, divc2, divc3, divc4, divc5, divc6]

for(let i of arrayElementos){
    i.innerHTML = 'Curso alterado'
}
console.log(arrayElementos)