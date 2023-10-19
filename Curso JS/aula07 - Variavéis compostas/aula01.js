let num = [8, 4, 9, 5, 6]
num.sort();
console.log(num)
let position = num.indexOf(9);
 if(position == -1){
    console.log(`Número inválido!`)
 } else{
    console.log( `A posição do valor solicitado é ${position}`)
 }