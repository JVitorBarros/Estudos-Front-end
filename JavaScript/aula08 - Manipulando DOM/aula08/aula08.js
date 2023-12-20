const caixa01 = document.querySelector("#caixa01")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa01.hasChildNodes())

//      desse jeito 
if(btn_c[0].children.length > 0){
    console.log('Possui filhos')
}else{
    console.log('Não possui filhos')
}
//          ou

//        assim
console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "NÃO possui filhos")

caixa01.children[1].innerHTML="teste"
