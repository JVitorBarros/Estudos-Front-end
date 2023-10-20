//                                      Funções Anônimas em JavaScript

/*
    Funções anônimas em JavaScript são funções que não têm um nome associado a elas. Elas também são conhecidas como funções lambda ou funções sem nome. As funções anônimas são amplamente utilizadas em JavaScript para criar blocos de código reutilizável que podem ser passados como argumentos para outras funções ou armazenados em variáveis.
*/

//                  Aqui está uma explicação completa e didática das funções anônimas em JavaScript:

/*
                                    Declaração de uma Função Anônima:

    Uma função anônima pode ser declarada de várias maneiras. A forma mais comum é usando a palavra-chave function sem 

    especificar um nome para a função. Por exemplo:
*/

var minhaFuncaoAnonima = function() {
    console.log("Esta é uma função anônima.");
};

/*
    Neste exemplo, minhaFuncaoAnonima agora contém uma função anônima que pode ser chamada posteriormente.

                                    Chamando uma Função Anônima:
            Para chamar uma função anônima, você a trata como uma variável e a invoca com parênteses:
*/    


minhaFuncaoAnonima(); // Chama a função anônima

// Quando você executa minhaFuncaoAnonima(), o código dentro da função anônima é executado.



//                          Passando Funções Anônimas como Argumentos:

/*
    Uma das vantagens das funções anônimas é que você pode passá-las como argumentos para outras funções. Por exemplo, a função setTimeout aceita uma função e um atraso (em milissegundos) como argumentos:
*/


setTimeout(function() {
    console.log("Isso será exibido após um atraso de 2 segundos.");
}, 2000);

// Neste caso, estamos passando uma função anônima para setTimeout.



//                                Escopo de Funções Anônimas:

/*
    Funções anônimas têm acesso ao escopo em que são definidas. Isso significa que elas podem acessar variáveis definidas no escopo circundante. Isso é conhecido como "closure". Por exemplo:
*/

function criarContador() {
    var contador = 0;

    return function() {
        contador++;
        console.log(contador);
    };
}

var meuContador = criarContador();
meuContador(); // 1
meuContador(); // 2

//Neste exemplo, a função anônima retornada por criarContador lembra o valor da variável contador mesmo após a execução da função criarContador.

/*
    Em resumo, funções anônimas são úteis quando você precisa de um bloco de código que pode ser passado como argumento, atribuído a uma variável ou usado em várias partes do seu código sem precisar de um nome específico. Elas são uma parte fundamental da programação em JavaScript e desempenham um papel importante no desenvolvimento de aplicativos e bibliotecas JavaScript.
*/


//                              NEW FUNCTION

/*
    A função new Function permite que você crie funções dinamicamente, especificando os argumentos e o corpo da função como strings. Aqui está um exemplo de como usar new Function para criar uma função anônima:
*/

var minhaFuncaoAnonima = new Function('console.log("Esta é uma função anônima criada com new Function.")');

minhaFuncaoAnonima(); // Chama a função anônima

/*
    Neste exemplo, estamos criando uma função anônima que contém o código console.log("Esta é uma função anônima criada com new Function."). Essa função é atribuída à variável minhaFuncaoAnonima e pode ser chamada da mesma forma que qualquer outra função.
*/

/*
    No entanto, é importante observar que o uso de new Function para criar funções dinamicamente não é a abordagem mais comum em JavaScript. Geralmente, as funções anônimas são criadas usando a sintaxe de função anônima declarada no primeiro exemplo que forneci. A função new Function é mais adequada quando você precisa gerar dinamicamente o código da função com base em strings, o que é uma técnica avançada e não é comum na maioria dos casos de uso.
*/