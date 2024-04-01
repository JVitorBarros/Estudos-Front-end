
class Carros{
    constructor(cnome, ctipo ){
        this.nome = cnome
        if(ctipo == 1){
            this.tipo = "Esportivo"
            this.Velmax = 300
        }else if(ctipo == 2){
            this.tipo = "Utilitario"
            this.Velmax = 100
        }else if(ctipo == 3){
            this.tipo = "Passeio"
            this.Velmax = 130
        }else{
            this.tipo = "Militar"
            this.Velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.Velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.Velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(Velmax){
        this.Velmax = Velmax
    }

    info(){
        console.log(`NOME: ${this.nome}`);
        console.log(`TIPO: ${this.tipo}`);
        console.log(`VELOCIDADE MAXIMA: ${this.Velmax}`)
        console.log('---------------------------------')
    }
}

let carro01 = new Carros('Rapidao', 1);
let carro02 = new Carros('Super luxo', 2);
let carro03 = new Carros('Carrego tudo', 3);
let carro04 = new Carros('Bombadão', 0);

console.log(carro01.info())

carro01.setNome('Super veloz');
carro01.setVelMax('500')


console.log(carro01.info())


