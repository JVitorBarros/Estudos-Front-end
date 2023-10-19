//        ****** Tipos de dados ******

/*
    JavaScript é uma linguagem de programação dinânima e fracamente tipada, o que significa que você não precisa declarar explicitamente o tipo de dado que uma variável vai conter. O tipo de dado é determinado automaticamente quando você atribui um valor a uma variavel. Os tipos de dados em JavaScript podem ser categorizados em dois grupos principais: tipos primitivos e tipos de referência.

*/

//         ****** Tipos de dados primitivos ******

/*
    Os tipos de dados primitivos são tipos simples de valores que representam dados únicos. Eles são imutáveis, o que significa que, uma vez que você cria uma variável com um valor primitivo, não pode modificar diretamente o valor dessa variável com um valor primitivo, não pode modificar diretamente o valor dessa variável. Os principais tipos de dados primitivos em JavaScript são:

        1. Number: Representa valores numéricos inteiros ou de ponto flutuantes. Por exemplo:

            let idade = 30;
            let altura = 1.75;

        2. String: Representa sequência de caracteres. Pode ser criada com aspas simples(''), aspas duplas("") ou template literals(` `).

            let nome = "Alice";
            let saudação = `Olá, ${nome}!`

        3. Boolean: Representa um valor verdadeiro(true) ou falso(false).
            
            let estaChovendo = false;

        4. Undefined: Representa uma variável que foi declarada, mas não foi atribuída com um valor.
        
            let numero;
            console.log(numero);  // Irá imprimir "undefined"

        5. Null: Representa a ausência intencional de qualquer valor ou objeto.

            let nulo = null;

        6. Symbol(a partir do ECMAScript 6): Representa valores únicos e imutáveis, frequentemente usados como identificadores únicos para propriedades de objetos.

            const simbolo = Symbol('descricao');

*/


//    ****** Tipos de dados de referência ******

/*
    Os tipos de dados de referência são mais complexos e podem conter multiplos valores ou objetos. Eles sao mutaveis, o que significa que você pode modificar o contéudo dessas variáveis sem criar uma nova variável. Os principais tipos de dados de referênica em JavaScript são:

        1. Object: Representa uma coleção não ordenada de pares chave-valor, onde as chaves são strings(ou simbolos) e os valores podem ser de qualquer tipo.

            let pessoa = {
                nome: "João",
                idade: 25,
            };

        2. Array: É um tipo especial de objeto que representa uma lista ordenada de valor acessados por um indece numerico.
            
            let frutas = ["Maçã", "banana", "laranja"];

        3. Function: Representa um bloco de código reutilizavel que pode ser chamado com argumentos e executado

            function saudacao(nome) {
                return `Olá, ${nome}!`;
            }

        4. Date: Representa datas e horários.

            let hoje = new Date();

        5. RegExp: Representa expressões regulares usadas para correspondência de padrões em strings.

            let regex = /a(b)c/; 
*/
