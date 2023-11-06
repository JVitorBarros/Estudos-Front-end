//                    Arrow Function em JavaScript

/*
    Em JavaScript, as Arrow Functions são utilizadas para criar funções anônimas de uma forma mais concisa. No entanto, vale a pena observar que as Arrow Functions são frequentemente usadas para criar funções curtas e não são usadas para criar métodos em objetos, como as funções construtoras. Mesmo assim, você pode criar uma Arrow Function dentro de um objeto. Aqui está um exemplo:
*/
const meuObjeto = {
    minhaFuncaoAnonima: () => {
        console.log("Esta é uma função anônima em um objeto usando uma Arrow Function.");
    }
}

meuObjeto.minhaFuncaoAnonima(); // Chama a função anônima no objeto

/*
    neste exemplo, estamos criando um objeto chamado meuObjeto. Dentro desse objeto, temos uma propriedade chamada minhaFuncaoAnonima, que é uma função anônima criada com uma Arrow Function.
*/


//                    Aqui estão os principais pontos:

/*
    * const meuObjeto:  Estamos criando um objeto chamado meuObjeto usando a palavra-chave const. Este objeto conterá nossa função anônima.

    * minhaFuncaoAnonima:  () => { ... }: Esta é a propriedade do objeto meuObjeto. A propriedade minhaFuncaoAnonima é uma função anônima criada com uma Arrow Function. A função não possui nome, é anônima, e é definida usando () => { ... }.

    * () => { ... }:  Esta parte define a Arrow Function. Ela possui um par de parênteses vazios, indicando que a função não aceita nenhum argumento. Em seguida, temos a seta =>, seguida de um bloco de código { ... }, que é o corpo da função.

    * console.log(...):  Dentro do corpo da função, temos um comando console.log que imprime uma mensagem na saída.

    * meuObjeto.minhaFuncaoAnonima():  Por fim, estamos chamando a função anônima definida em meuObjeto usando a notação de ponto. Isso executa a função e exibe a mensagem na saída.

    As Arrow Functions são especialmente úteis quando você precisa de funções curtas e concisas. Elas herdam o valor de this do escopo circundante, o que pode ser útil em determinados cenários, mas também pode ser um ponto de atenção em casos mais complexos. Certifique-se de entender as implicações do uso de Arrow Functions em relação ao escopo antes de utilizá-las em seu código.
*/


//                          segundo exemplo

const soma = (v1=0, v2=0) =>{
    return v1 + v2;
}

console.log(soma(10, 15));