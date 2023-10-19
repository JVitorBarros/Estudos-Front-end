//             OPERADORES

/*
    Operadores são símbolos que representam operações a serem realizadas em valores ou variáveis. Eles são uma parte fundamental da linguagem e são usados para realizar cálculos, comparações e manipulações de dados.

    Existem vários tipos de operadores em JavaScript, e eles podem ser categorizados em diferentes grupos:

*/  

//              **** OPERADORES ARITMÉTICOS ****

//  Os operadores aritméticos são usados para realizar operações matemáticas em valores numéricos. Os operadores aritméticos em JavaScript incluem: 

//  ADIÇÃO (+)

let soma = 5 + 3;               // soma contém 8

//  SUBTRAÇÃO (-)   

let diferenca = 10 - 4;         // diferenca contém 6

//  MULTIPLICAÇÃO (*)

let produto = 3 * 4;            //  Produto contem 12

//  DIVISÃO (/)

let quociente = 20 / 5;         // quociente contém 4

//  MOÓDULO (%)

let resto = 15 % 7;             // resto contém 1



//              **** OPERADORES DE ATRIBUIÇÃO ****

// Os operádores de atribuição são usados para atribuir valores a variáveis. O operador de atribuição básico é o '=':

let x = 10;                    // Valor 10 atribuido a variavel x


// No entanto, existem operadores de atribuição combinados que permitem realizar uma operação e atribuir o resultado à variável em uma expressão com '+=', '-=', '*=', '/=', '%='.

let y = 2;

y += 2;                     // Agora y é igual a 4 (y = y + 2)
y -= 1;                     // Agora y é igual a 3 (y = y - 1)
y *= 3;                     // Agora Y é igual a 9 (y = y * 3)



//              **** OPERADORES DE COMPARAÇÃO ****

//  Os operadores de comparação são usados para comparar dois valores e retornar um valor booleano(verdadeiro ou falso). Os operadores de comparação em JavaScript inlcuem:

// IGUAL (==): Verifica se dois valores são iguais.

// DIFERENTE (!=): Verifica se dois valores são diferentes.

// ESTRITAMENTE IGUAL (===): Verifica se dois valores são iguais e do mesmo tipo.

// ESTRITAMENTE DIFERENTE (!==): Verifica se dois valores são diferentes ou do tipo diferente.

// MAIOR QUE (>): Verifica se um valor é maior que outro.

// MAIOR OU IGUAL (>=): Verifica se um valor pe maior ou igual a outro.

// MENOR QUE (<): Verifica se um valor é menor que outro.

// MENOR OU IGUAL (<=): Verifica se um valor é menor ou igual a outro.

let a = 5;
let b = 10;

console.log(a == b);                    // False. 5 não é igual a 10
console.log(a < b);                     // True. 5 é menor que 10



//              **** OPERADORES LÓGICOS ****


// Os operadores lógicos são usado para realizar operações lógicas em valores booleanos. Os operadores lógicos em JavaScript incluem: 

// E (&&): Retorna verdadeiro se ambos os operandos forem verdadeiros.

// OU (||): Retorna verdadeiro se pelo menos um dos operandos for verdadeiro

// NÃO LOGICO (!): Inverte o valor operando.

let c = true;
let d = false;

console.log(c && d);                       // false
console. log(c || d);                       // true
console.log(!c)                              //false



//              **** OUTROS OPERADORES ****

//  Existem também outros operadores em JavaScript, como:

// OPERADOR DE CONCATENAÇÃO (+): Usado para concatenar strings.

let nome = "João";
let sobrenome = "Vitor"
let nomeCompleto = nome + "" + sobrenome // nome completo contem "João Vitor"

// OPERADOR DE TERNÁRIO( condição ? expressão1 : expressão2): Permite fazer uma escolha entre duas expressões com base em condição.

let idade = 18;
let status = (idade >= 18)? "maior de idade" : "menor de idade;"

/*
    Estes são alguns dos operadores mais comuns em JavaScript. Eles desempenham um papel fundamental na escrita de código JavaScript eficaz, permitindo que você realize cálculos, tome decisões, faça comparações e muito mais. É importante entender como esses operadores funcionam para programar efetivamente em JavaScript.
*/

  