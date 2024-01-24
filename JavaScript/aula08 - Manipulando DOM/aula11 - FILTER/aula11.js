const idades = [13, 18, 20, 9, 35, 19, 18, 47 ];

const maior = idades.filter((valor, indice, array)=>{
    if(valor >= 18){
        return valor
    }
})

const menor = idades.filter((valor, indice, array)=>{
    if(valor < 18){
        return valor
    }
})

console.log(idades)
console.log(maior)
console.log(menor)
