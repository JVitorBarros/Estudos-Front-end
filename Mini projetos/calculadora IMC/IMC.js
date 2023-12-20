let nome = document.querySelector('#nome')
let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let resultado = document.querySelector('#resultado')
const botao_calcular = document.querySelector('#calcular')

botao_calcular.addEventListener("click",()=>{
    const calculo = peso / (altura * altura)

    if(calculo < 18.5){
        resultado.innerHTML = `${nome.value}, seu IMC é ${calculo.value} e seu estado atual é Magreza`

    }else if(calculo >= 18.5 || calculo <= 24.9){
        resultado.innerHTML = `${nome.value}, seu IMC é ${calculo.value} e seu estado atual é Normal`

    }else if(calculo >= 25 || calculo <= 29.9){
        resultado.innerHTML = `${nome}, seu IMC é ${calculo} e seu estado atual é Sobrepeso`
    
    }else if(calculo >= 30 || calculo <= 34.9){
        resultado.innerHTML = `${nome}, seu IMC é ${calculo} e seu estado atual é Obesidade grau I`
    
    }else if(calculo >= 35 || calculo <= 39.9){
        resultado.innerHTML = `${nome}, seu IMC é ${calculo} e seu estado atual é Obesidade grau II`
    
    }else{
        resultado.innerHTML = `${nome.value}, seu IMC é ${calculo.value} e seu estado atual é Obesidade grau III`
    }
})
