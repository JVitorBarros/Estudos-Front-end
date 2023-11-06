"use strict"

//                              O que é uma função?


/* 
    Uma função é como uma receita em um livro de culinária. Imagine que você tem uma receita para fazer bolo. A receita é uma série de etapas que você segue para criar um bolo delicioso sempre que quiser. Em JavaScript, uma função é como essa receita. É um conjunto de instruções que você pode usar repetidamente para realizar uma tarefa específica. 
    
*/


//                           Componentes de uma função:

/* 
    * Nome:           Uma função tem um nome, assim como uma receita tem um título. 
                      O nome é o que você usa para chamar a função.
   
    * Parâmetros:     São como ingredientes na receita. Uma função pode precisar de 
                      informações para realizar sua tarefa. Os parâmetros são como 
                      ingredientes que você fornece à função.

    * Instruções:     São as etapas da receita. Em uma função, as instruções são o 
                      que a função faz com os parâmetros.

    * Resultado:      Assim como a receita produz um bolo no final, uma função pode 
                      retornar um resultado. Isso é o que você obtém depois de usar a 
                      função. 
*/


//                              Exemplo de uma função:

//              Vamos criar uma função simples que some dois números:


function somar(a, b) {
    var resultado = a + b;
    return resultado;
}

/* 
    * O nome da função é 'somar'. 
    * Ela recebe dois ingredientes, 'a' e 'b', que são os números que você 'quer somar'.
    * As instruções dentro da função somam esses números e armazenam o resultado na variável 'resultado'.
    * A função retorna o valor de resultado como resultado. 

*/


//                              Como usar uma função:

/* 
    Agora que temos nossa receita (função), podemos usá-la quantas vezes quisermos para somar números.
*/    
    

//                             Veja como você faria isso:


var resultadoDaSoma = somar(5, 3);
console.log(resultadoDaSoma);       // Isso imprimirá 8


/* 
    * Chamamos a função somar(5, 3) com os números '5' e '3'.
    * A função executa suas instruções e nos dá o resultado, que é '8'.
    * Armazenamos o resultado em 'resultadoDaSoma' e o imprimimos no console.

Assim, funções em JavaScript são como receitas que você pode usar para fazer coisas específicas no seu código. Elas tornam o código mais organizado e reutilizável, assim como as receitas tornam a cozinha mais eficiente.
*/