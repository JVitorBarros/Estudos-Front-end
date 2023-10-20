// Retorne o cubo de um número fornecido pelo usuário.

function Cubo(num){
    let res = num * num * num;
    return res;
}
let num = 3
let res = Cubo(num);
console.log(`${num} ao cubo é ${res}`);