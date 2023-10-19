"use strict"
/*
Fácil 4- Faça um programa que verifique (usando if e else) se uma letra digitada é vogal ou consoante.  

*/

let letra = prompt("u");

if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    console.log(`${letra} é uma Vogal`)
}else{
    console.log(`${letra} é uma Consoante`)
}