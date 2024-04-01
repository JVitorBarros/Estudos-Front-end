class Pessoa{
    constructor(nomePessoa, idadePessoa){
        this.nome = nomePessoa
        this.idade = idadePessoa
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        return this.nome = nome
    }
    getIdade(){
        return this.idade
    }
    setIdade(){
        return this.idade = idade
    }
}

const botaoAdicionar = document.getElementById('btn-adicionar');
const listaPessoas = document.getElementById('lista');
let pessoas = [];

const addPessoa =()=>{
    listaPessoas.innerHTML = ''
    pessoas.map((p)=>{
        const dadosPessoa = document.createElement('div');
        dadosPessoa.setAttribute('class', 'pessoa');
        dadosPessoa.innerHTML = `<p>NOME: ${p.getNome()}</p><p>IDADE: ${p.getIdade()}</p>`;
        listaPessoas.appendChild(dadosPessoa);
    })
}

botaoAdicionar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');

    const p = new Pessoa(nome.value, idade.value);
    pessoas.push(p);
    nome.value = "";
    idade.value = "";
    nome.focus();

    addPessoa();
})

