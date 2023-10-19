//              **** CONDICIONAIS ****

/*
    As estruturas condicionais permitem que você controle o fluxo de execução de um programa com base em condições.

    Existem duas principais  estruturas condicionais em JavaScript: 'if' (se) e 'switch' (escolha).
*/


//          **** 1. ESTRUTURA CONDICIONAL 'IF'

// Uma condicional estrutural 'if' permite que você execute um bloco de código com uma determinada condição avaliada como verdadeira(true). A sintaxe básica 'if' é a seguinte: 

if (condicao) {
    // Código a ser executado se a condição for verdadeira

} else {
    // Código a ser executado se a condição for falsa(opcional)
}

// Exemplo

let idade = 18;

if(idade >= 18){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

/*
    Neste exemplo, o código verifica se a variavel 'idade' é maior ou igual a 18. Se a condição for verdadeira, ele imprime "Maior de idade"; caso contrário, imprime "Menor de idade".

    Você também pode usar o 'if' sem um bloco 'else', você precisa executar o código quando a condição for verdadeira. 

*/


//              **** 2. ESTRUTURA CONDICIOMNAL 'ELSE IF' ****


//  Você pode usar uma estrutura 'else if' para verificar múltiplas condições em sequência. Aqui está a sintaxe:

if(condicao1){
    // Código a ser executado se a condição1 for verdadeira
} else if(condicao2){
    // Código a ser executado se a condição for falsa e a condição2 for verdadeira
} else {
    // Código a ser executado se nenhuma das condições anteriores for verdadeira
}

// Exemplo: 

let nota = 75;

if(nota >=90){
    console.log("A");
} else if (nota >= 80){
    console.log("B");
} else if (nota >= 70){
    console.log("C");
}else{
    console.log("D");
}

// Este exemplo verifica a nota e imprime uma letra correspondente com base em uma escala de notas.


//          **** 3. ESTRUTURA CONDICIONAL 'SWITCH' ****

// Uma estrutura condicional 'switch' é usada para realizar uma série de verificações e executa código com base no valor de uma expressao. A sintaxe 'switch' é a seguinte: 

switch(expressão){
    case valor1:
        //  Código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        //  Código a ser executado se a expressão for igual a valor2 
        break;
    //...
    default:
        //  Código a ser executado se a expressão não correspondera nenhuma dos casos anteriores (opcional)
        
}

// Exemplo: 

let diaDaSemana = "quarta-feira";

switch (diaDaSemana){
    case "segunda-feira":
        console.log("Dia útil");
        break;
    case "terça-feira":
        console.log("Dia útil");
        break;
    case "quarta-feira":
        console.log("Dia útil");
        break;
    
    case "quinta-feira":
        console.log("Dia útil");
        break;       
    case "sexta-feira":
        console.log("Dia útil");
        break;
    case "Sábado":
        console.log("Fim de semana");
        break;
    case "Domingo":
        console.log("Fim de semana");
        break;
    default:
        console.log("Dia inválido");

}

// É 'switch' é uma alternativa ao uso de múltiplos 'if...elseif' quando você precisa tomar decisões com base em valor específico.


//             *** OPERADORES LÓGICOS EM CONDICIONAIS ***

//  Além das estruturas condicionais, voce pode usar operadores lógicos (como '&&', '||' e '!') para criar condições nmais complexas. Por exemplo:

let idade1 = 20;
let possuiCarteiraDeMotorista = true;

if (idade1 >= 18 && possuiCarteiraDeMotorista){
    console.log("pode dirigir");
} else {
    console.log("Não pode dirigir");
}

// Neste exemplo, a condição só será verdadeira se a idade dor maior ou igual a 18 e a variável 'possuiCarteiraDeMotorista' for verdadeira.

// As estruturas condicionais são fundamentais na programação, pois permitem que voce controle o comportamento do seu código com base em diferentes situações. É importante entender como usar 'if', 'else if', 'else', 'switch' e operadores lógicos para escrever código eficiente e lógico em JavaScript. 

