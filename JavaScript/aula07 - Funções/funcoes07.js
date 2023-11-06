"use strict"

//          Funções Geradoras em JavaScript

//      Primeiro exemplo: 

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


// -------------------------------------------------------------------------------------

// Segundo exemplo: 

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ", seu esporte favorito é " + esporte
}

const itp = perguntas();
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Futebol').value)


//----------------------------------------------------------------------------------------

// Terceiro exemplo

function* contador(){
    let i = 0 
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}
let itct = contador()
for(let v of itct){
    console.log(v)
}



// ---------------------------------------------------------------------------------------

/*
    Funções geradoras, em JavaScript, são um tipo especial de função que permite a suspensão da execução e retomada posterior. Eles são usados ​​para criar iteradores personalizados, o que é útil em casos onde você precisa gerar uma sequência de valores de forma preguiçosa, ou seja, gerando valores sob demanda, economizando memória e processamento.

    Para criar uma função geradora, você utiliza a sintaxe da função regular, mas inclui a palavra-chave function*. Dentro da função geradora, você pode usar uma instrução yieldpara emitir (produzir) um valor e pausar a execução da função até que a próxima iteração seja solicitada.
*/

//  Aqui está um exemplo de uma função geradora simples que gera números pares:

function* numerosPares() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

const gerador = numerosPares();

console.log(gerador.next().value); // 0
console.log(gerador.next().value); // 2
console.log(gerador.next().value); // 4

/*
Neste exemplo:

A função 'numerosPares' é uma função gerada marcada com function*. Dentro dela, usamos um loop infinito para gerar números pares.

A instrução yieldé usada para emitir o valor atual ( num) e pausar a execução da função. Quando chamamos 'gerador.next()', a função geradora retorna a execução a partir do ponto em que foi pausada pelo yielde gera o próximo número par.

Funções geradas são úteis quando você precisa lidar com sequências atmosféricas grandes de dados, como iteração sobre um grande conjunto de dados ou implementação de fluxos. Elas permitem a geração sob demanda, evitando o carregamento de todos os dados na memória de uma vez.

Além disso, as funções geradoras também podem ser usadas com a estrutura for...ofdo JavaScript para simplificar a iteração em sequências geradas por funções geradoras.

*/ 