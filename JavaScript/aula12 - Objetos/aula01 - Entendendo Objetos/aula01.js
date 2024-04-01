class Pessoa{   /* class Pessoa {: Aqui, estamos definindo uma classe     
                chamada Pessoa. No JavaScript, por convenção, os nomes de classes geralmente começam com letra maiúscula.*/

    constructor(pnome){ /* constructor(pnome) {: Este é o método construtor 
                                da classe Pessoa. O construtor é um método especial que é chamado automaticamente quando você instancia um novo objeto da classe. Ele recebe um parâmetro pnome, que representa o nome da pessoa que será passado ao criar um novo objeto Pessoa.*/

        this.nome = pnome /* this.nome = pnome;: Dentro do construtor,      
                                estamos atribuindo o valor do parâmetro pnome ao atributo nome do objeto atual (this). Isso significa que cada objeto Pessoa que for criado terá seu próprio atributo nome com o valor passado ao instanciá-lo.*/
    }
}

let p1 = new pessoa('Erick')
let p2 = new pessoa('Vitor')
let p3 = new pessoa('Lucas')

/* let p1 = new Pessoa('Erick');: Aqui, estamos criando uma nova instância da classe Pessoa e atribuindo-a à variável p1. Ao criar essa instância, estamos passando o nome 'Erick' como argumento para o construtor da classe Pessoa.

let p2 = new Pessoa('Vitor');: Similarmente ao p1, estamos criando uma nova instância da classe Pessoa e atribuindo-a à variável p2, desta vez passando o nome 'Vitor'.

let p3 = new Pessoa('Lucas');: Da mesma forma, estamos criando uma nova instância da classe Pessoa e atribuindo-a à variável p3, desta vez passando o nome 'Lucas'.
*/

console.log(p1.nome); 
console.log(p2.nome); 
console.log(p3.nome); 