"use strict"
//                              Funções parametrizadas em JavaScript


//                              O que são Funções Parametrizadas?

/* 
    Imagine que você tem um conjunto de ações que você deseja realizar várias vezes, mas com alguns detalhes diferentes em cada ação. Em vez de escrever todo o código novamente para cada ação, você pode criar uma função parametrizada.

    *  Função: É um bloco de código que faz algo específico. É como um mini-programa dentro do seu programa maior.
    *  Parametrizada: Isso significa que a função pode aceitar informações ou "parâmetros" que podem ser diferentes cada vez que a função é usada.

*/

//                              Exemplo de Função Parametrizada:

/*
    Vamos criar uma função que cumprimenta alguém pelo nome. Esta função será parametrizada porque podemos cumprimentar diferentes pessoas, fornecendo seus nomes como parâmetros.
*/

function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
}

/*
    Nossa função se chama 'cumprimentar'.
    Ela tem um parâmetro chamado 'nome', que é o nome da pessoa que queremos cumprimentar.
    As instruções da função imprimem uma mensagem de cumprimento com o nome fornecido.
*/


//                              Como Usar uma Função Parametrizada:

// Agora que temos nossa função, podemos usá-la para cumprimentar diferentes pessoas.


cumprimentar("Alice"); // Isso imprimirá "Olá, Alice!"
cumprimentar("Bob");   // Isso imprimirá "Olá, Bob!"
cumprimentar("Carlos"); // Isso imprimirá "Olá, Carlos!"

/*
    Chamamos a função 'cumprimentar três vezes', fornecendo 'nomes diferentes' a cada vez.
    A função utiliza o nome que fornecemos como parâmetro e imprime uma mensagem de cumprimento personalizada.
*/


//                             Benefícios das Funções Parametrizadas:

/*
    * Reutilização: Você pode usar a mesma função para realizar a mesma ação com diferentes valores, evitando a repetição de código.

    * Personalização: Você pode personalizar a função com diferentes parâmetros para obter resultados específicos.
  
    * Organização: Funções parametrizadas ajudam a organizar o código, tornando-o mais legível e fácil de entender.


Em resumo, funções parametrizadas em JavaScript são como ferramentas que você cria para realizar ações específicas com base em informações variáveis que você fornece como parâmetros. Elas são uma parte fundamental da programação, tornando o código mais eficiente e flexível.
*/




// Segundo exemplo: 


function soma(n1=0, n2=0){
    let soma
    return soma = n1 + n2
}

console.log(soma(5, 10))
console.log(soma(10))