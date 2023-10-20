/*
Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).
*/

// C = 5/9 x (F-32)

function conversaoTemp(temp){
    let tempCels = (5/9) * (temp - 32);
    return tempCels;  
}

let tempFahr = 200;
let res = conversaoTemp(tempFahr);

console.log(`Temperatua em graus Celsius(C): ${res}`);
