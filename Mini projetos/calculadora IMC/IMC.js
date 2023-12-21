
const botao_calcular = document.querySelector('#calcular');

botao_calcular.addEventListener("click",()=>{
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado')
    
    const valorIMC = (peso / (altura * altura)).toFixed(2)

    if(nome == '' || altura == '' || peso == ''){
       alert('Preencha os campos que estão faltando ')
    }
    else if(valorIMC < 18.5){
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e seu estado atual é Magreza`

    }
    else if(valorIMC >= 18.5 || valorIMC <= 24.9){
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e seu estado atual é Normal`

    }
    else if(valorIMC >= 25 || valorIMC <= 29.9){
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e seu estado atual é Sobrepeso`
    
    }
    else if(valorIMC >= 30 || valorIMC <= 34.9){
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e seu estado atual é Obesidade grau I`
    
    }
    else if(valorIMC >= 35 || valorIMC <= 39.9){
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e seu estado atual é Obesidade grau II`
    
    }
    else{
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e seu estado atual é Obesidade grau III`
    }
})
