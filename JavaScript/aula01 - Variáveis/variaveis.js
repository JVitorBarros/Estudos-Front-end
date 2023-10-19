//     ****** Variavel ******

/*
O que é uma variável em JavaScript?

Uma variável em JavaScript é um espaço de armazenamento nomeado que é usado para guardar dados. Esses dados podem ser números, strings de texto, objetos, funções e outros tipos de valores. As variáveis permitem que você armazene e manipule informações em seu programa JavaScript.

*/ 



//      ****** Declaração de Variáveis ******

/*
Em JavaScript, você pode declarar variáveis usando três palavras-chaves diferentes: 

            'var'
            'let'
            'const'
    
    * var: pense no 'var' como uma caixa de papelão que você pode usar para armazenar coisas em uma sala. A peculiaridade das caixar 'var' é que elas podem escapar da sala e serem vistas por todos na casa. Além disso, você pode mudar o que está dentro da caixa a qualquer momento.
            ex: 
                var idade = 30; //Coloquei a idade na caixa var.
                idade = 35;     // Mudei o valor da idade na mesma caixa var    
                
        
        Características principais do 'var':
        
        º Escopo de função ou escopo global.
        º Pode ser redeclarada no mesmo escopo
        º Pode ser atualizada em qualquer lugar no código


    * let: Pense em 'let' como uma caixa com tampa que você coloca em um quarto. Esta caixa só pode ser vista e usada dentro desse quarto, e voce pode trocar o que está dentro dela, mas não pode ter outra caixa com o mesmo nome no mesmo quarto.
            ex: 
                let nome = "João";  // Coloquei o nome na caixa let no qaurto;
                nome = "Maria";     // Mudei o valor da caixa let no mesmo quarto

        Características principais do 'let':
        
        º Escopo de bloco.
        º Não pode ser redeclarada no mesmo escopo.
        º Pode ser atualizada em qualquer lugar no código


    * const: 'const' é como uma caixa especial com uma tampa que você colocqa em um quarto. O que voce coloca dentro dela nao pode ser alterado depois de feixar a tampa. Além disso, você não pode ter outra caixa com o mesmo nome no mesmo quarto.
            ex:
                const PI = 3.1415; // coloquei o valor de PI na caixa const no quarto.

        Caracteristias principais do 'const': 
        
        º Escopo de bloco.
        º Não pode ser redeclarada no mesmo escopo.
        º Não pode ser atualizada após a primeira atribuição.

                        
                        
    Resumo:

    - Use var se precisar de uma variável que possa ser vista de qualquer lugar no seu código, mas tenha cuidado, pois pode causar problemas de escopo.

    - Use let se quiser uma variável que só seja visível dentro do bloco onde foi declarada e que possa ser atualizada.
 
    - Use const se quiser uma variável que só seja visível dentro do bloco onde foi declarada e que não possa ser atualizada após a primeira atribuição.

*/



//      ****** Regras para nomes de Variáveis ******

/* 
   - O nome de uma variável deve começar com uma letra(a-z, A-Z) ou sublinhado(_) ou cifrão($).

   - Os nomes de variáveis são sensíveis a maiúsculas e minúsculas, o que significa que 'nome' e 'Nome' são considerados variaveis diferentes.

   - Os nomes de variáveis podem conter letras, números, sublinhados e cifrões.

   - Não use palavras reservadas do JavaScript (como 'if', 'for', 'while' e etc.) Como nomes de variáveis

*/



//       ****** Inicializando Variáveis ******

// Voce pode declarar uma variavel e atribuir um valor a ela  ao mesmo tempo:

let numero = 42;    // Variavel declarada com o valor de 42.



//       ******* Tipos de dados ******

/*

JavaScript é uma linguagem de tipagem dinâmica, o que significa que você não precisa declarar explicitamente o tipo de dado que uma variável vai armazenar. Os tipos de dados em JavaScript incluem:

    * Number: para representar números inteiros ou de ponto  flutuante.

    * String: para representar texto.

    * Boolean: para representar valores verdadeiro ou falso.

    * Object: para representar estruturas de dados mais complexas.

    *Array: para representar coleções ordenadas de valores.

    *Function: para representar funções.

*/


// Exemplo de uso de variáveis: 

// Aqui está um exemplo simples que usa variáveis em JavaScript:

let nome = "Alice";
let idade = 25;
let estaEstudando = true;

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Está estudando? ", estaEstudando);




/*
    Em resumo, variáveis em JavaScript são contêineres para armazenar dados e desempenham um papel fundamental na criação de programas JavaScript. Elas podem ser declaradas usando `var`, `let`, ou `const`, e podem armazenar diferentes tipos de dados. Entender como declarar, inicializar e usar variáveis é fundamental para programar em JavaScript.
*/