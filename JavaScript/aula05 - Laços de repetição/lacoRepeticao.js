//             **** Laço de repetição ****


/*
    Os laços de repetição, também conhecidos como estruturas de reprodução ou loops, permitem que voce execute um bloco de código varias vezes com base em uma condição específica. JavaScript oferece várias formas de implementar laços de repetição. As mais comuns são 'for', 'while' e 'do...while'.

*/


//                 **** LAÇO 'for' ****

//  O laço 'for' é usadop quando voce sabe antecipadamente quantas vezes deseja repetir  um  bloco de código. A sintaxe básica é a seguinte:

for (inicialização; condição; atualização){
    // Código a ser repetido
}

//  'inicialização': é onde voce inicializa uma variável de controle do loop

//  'condição': é uma expressão booleana que define quando o loop deve continuar.

//  'atualização': é onde voce atualiza a variavel de controle após cada iteração do loop.

//  EXEMPLO: 

for (let i = 0; i < 5; i++){
    console.log(i);
}

// Este código imprimirá os números de 0 a 4 no console.



//              **** LAÇO 'while' ****

// O laço 'while' é usado quando voce não sabe exatamente quantas vezes deseja repetir um bloco de código, mas deseja continuar enquanto uma condição for verdadeira. A sintaxe é a seguinte:

while (condição){
    // Código a ser repetido
}

//Exemplo

let contador = 0;

while (contador < 5 ){
    console.log(contador);
    contador++;
}

// Este código também imprimirá os números de 0 a 4 no console



//              **** LAÇO 'do...while'

//  O laço 'do...while' é semelhante ao 'while', mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condução seja inicialmente falsa. A sintaxe é a seguinte:

do {
    // código a ser repetido
} while (condição);

// Exemplo:

let contador1 = 0;

do{
    console.log(contador1);
    contador1++
} while (contador1 < 5);

// Este código também imprimirá os numeros de 0 a 4 no console.



//              **** CONTROLE DE FLUXO EM LAÇOS ****

// Em loops, voce pode usar instruções como 'break' e 'continue' para controlar o fluxo de execução: 

// Exemplo com 'break': 

for (let i = 0; i < 5; i++){
    if(i === 3){
        break; // Encerra o loop quando i é igual a 3
    }
    console.log(i);
}

// Este código imprimirá os números de 0 a 2 no console e depois encerrará o loop quando 'i' for igual a 3

//Exemplo com 'continue':

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Pula a iteração quando i é igual a 2
  }
  console.log(i);
}

/*
    Este código imprimirá os números de 0 a 4 no console, mas pulará a iteração quando i for igual a 2.

    Os laços de repetição são fundamentais para automatizar tarefas repetitivas em programação. É importante compreender quando e como usar os diferentes tipos de laços e como controlar o fluxo dentro deles para escrever código eficiente e lógico em JavaScript.
*/