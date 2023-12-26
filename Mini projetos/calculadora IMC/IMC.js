
const botao_calcular = document.querySelector('#calcular');

botao_calcular.addEventListener("click",()=>{
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado')
    
    const valorIMC = (peso / (altura * altura)).toFixed(1)

    if(nome != '' || altura != '' || peso != ''){

        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = "Abaixo do normal"
        }else if(valorIMC <= 24.9){
            classificacao = "Peso considerado na faixa saudável"
        }else if(valorIMC <= 29.9 ){
            classificacao = "Peso na faixa do sobrepeso"
        }else if(valorIMC <= 39.9){ 
            classificacao = "Peso na faixa de obesidade Grau II"
        }else if(valorIMC > 40){
            classificacao = "Peso na faixa de obesidade grau III"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}, estado atual: ${classificacao}`

    }else{
        alert("preencha os campos que estão faltando")
    }
})
