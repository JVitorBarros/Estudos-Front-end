//    Parêmetro REST em funções JavaScript

/*
    O parâmetro REST em funções JavaScript é uma maneira de lidar com um número variável de argumentos passados para uma função. Em termos mais simples, ele permite que você passe qualquer quantidade de valores como argumentos para uma função e acesse esses valores como um array dentro da função. Vou explicar isso de forma didática com um exemplo.
*/


// Imagine que você deseja criar uma função que some qualquer quantidade de números. Tradicionalmente, você faria algo assim:

function somar(a, b, c) {
    return a + b + c;
}

var resultado = somar(2, 3, 4);
console.log(resultado); // Isso imprimirá 9

/*
    No exemplo acima, a função somar aceita três argumentos (a, b e c). Mas e se você quiser somar 4, 5 ou mais números? Você teria que criar várias versões da função ou lidar com um número fixo de argumentos.
    Aqui é onde o parâmetro REST entra em ação. Com o parâmetro REST, você pode criar uma função que aceita qualquer número de argumentos e soma todos eles. 
*/


//              Veja como funciona:


function somar(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

var resultado = somar(2, 3, 4, 5, 6);
console.log(resultado); // Isso imprimirá 20

//    Neste exemplo:
/*
    Usamos '...numeros' como parâmetro na definição da função. O (...) indica que estamos usando um parâmetro 'REST', que coleta todos os argumentos em uma matriz chamada numeros.
    Em seguida, percorremos a matriz numeros com um loop 'for...of' e somamos todos os valores para calcular o total.
    A função pode aceitar qualquer quantidade de números como argumentos e somá-los corretamente.
    
    O parâmetro REST é uma ferramenta útil para lidar com situações em que você não sabe antecipadamente quantos argumentos serão passados para uma função. Ele permite que você trabalhe com esses argumentos de maneira flexível, tornando seu código mais versátil e reutilizável
*/

