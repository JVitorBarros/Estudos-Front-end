let myMap = new Map();

// Adicionando pares chave-valor usando set()

myMap.set('a', 1);
myMap.set('b', 2);

/*
    Aqui, criamos um novo objeto Map chamado myMap e adicionamos dois pares chave-valor usando o método set(). Isso cria um mapa onde a chave 'a' tem o valor 1 e a chave 'b' tem o valor 2.
*/


// Obtendo valores usando get()

console.log(myMap.get('a')); // Retorna 1
console.log(myMap.get('c')); // Retorna undefined

/*
    Usamos o método get() para recuperar os valores associados às chaves 'a' e 'c'. Como a chave 'a' existe no mapa, ele retorna o valor 1. No entanto, como a chave 'c' não existe, retorna undefined.
*/


// Verificando se uma chave existe usando has()

console.log(myMap.has('a')); // Retorna true
console.log(myMap.has('c')); // Retorna false

/*
    O método has() é usado para verificar se uma chave específica existe no mapa. Aqui, verificamos se as chaves 'a' e 'c' existem. Como 'a' existe, o primeiro console imprime true, enquanto 'c' não existe, então o segundo console imprime false.
*/

// Removendo um par chave-valor usando delete()

myMap.delete('a'); // Remove o par chave-valor com chave 'a'

/*
    Usamos o método delete() para remover o par chave-valor associado à chave 'a'. Após esta linha de código, o par chave-valor com a chave 'a' será removido do Map.
*/


// Removendo todos os pares chave-valor usando clear()

myMap.clear(); // Remove todos os pares chave-valor do Map

/*
    Aqui, usamos o método clear() para remover todos os pares chave-valor do    mapa, deixando-o vazio.
*/


// Obtendo o número de pares chave-valor usando size

console.log(myMap.size); // Retorna o número de pares chave-valor no Map

/*
    Finalmente, size é uma propriedade que nos permite obter o número de pares chave-valor no mapa. Neste caso, como todos os pares chave-valor foram removidos com clear(), o tamanho do mapa será 0.
    
*/


