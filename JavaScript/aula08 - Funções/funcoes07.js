"use strict"
//          Funções Geradoras em JavaScript

//      Primeiro exemplo: 
/*
function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'   
}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

// Segundo exemplo: 
/*
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp = perguntas();
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Futebol').value)
*/

// Terceiro exemplo

function* contador(){
    let i = 0;
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}
const itc = contador();
for(let v of itc ){
    console.log(v)
}