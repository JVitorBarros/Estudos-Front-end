/*
 realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).
*/



function conversaoTemp(temp){
    let tempCels = (5/9) * (temp - 32);
    return tempCels;  
}

let tempFahr = 200;
let res = conversaoTemp(tempFahr);

console.log(`Temperatua em graus Celsius(C): ${res}`);
