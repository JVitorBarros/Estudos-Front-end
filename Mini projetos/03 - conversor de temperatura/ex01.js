const botaoReverter = document.getElementById('botao-reverter');
const botaoCalcular = document.getElementById('botao-calcular')
const caixaSelect01 = document.getElementById('temp01');
const caixaSelect02 = document.getElementById('temp02');
const valorTemperatura = document.getElementById('temperatura');
const temperatura01 = document.getElementById('tp01');
const temperatura02 = document.getElementById('tp02');


botaoReverter.addEventListener('click', ()=>{
    const valorSelecionadoCaixa01 = caixaSelect01.value
    const valorSelecionadoCaixa02 = caixaSelect02.value
    caixaSelect01.value = valorSelecionadoCaixa02
    caixaSelect02.value = valorSelecionadoCaixa01
    
})
 botaoCalcular.addEventListener('click', ()=>{
    const valorSelecionadoCaixa01 = caixaSelect01.value
    const valorSelecionadoCaixa02 = caixaSelect02.value
    
    if(valorSelecionadoCaixa01 == '1' && valorSelecionadoCaixa02 == '2'){
        const resultado = valorTemperatura.value * (9/5) + 32;
        temperatura01.innerHTML = `${valorTemperatura.value} c°`
        temperatura02.innerHTML = `${resultado} f° `
    }else if( valorSelecionadoCaixa01 == '1' && valorSelecionadoCaixa02 == '1'){
        temperatura01.innerHTML = `${valorTemperatura.value} c°`
        temperatura02.innerHTML = `${valorTemperatura.value} c°`

    }else if(valorSelecionadoCaixa01 == '1' && valorSelecionadoCaixa02 == '3'){
        const resultado = parseFloat(valorTemperatura.value) + 273.15
        temperatura01.innerHTML = `${valorTemperatura.value} c°`
        temperatura02.innerHTML = `${resultado} k° `
    }else if(valorSelecionadoCaixa01 == '2' && valorSelecionadoCaixa02 == '1'){
        const resultado = (valorTemperatura.value - 32) * 5/9;
        temperatura01.innerHTML = `${valorTemperatura.value} f°`
        temperatura02.innerHTML = `${resultado.toFixed(5)} c° `
    }else if( valorSelecionadoCaixa01 == '2' && valorSelecionadoCaixa02 == '2'){
        temperatura01.innerHTML = `${valorTemperatura.value} f°`
        temperatura02.innerHTML = `${valorTemperatura.value} f°`

    }
    else if(valorSelecionadoCaixa01 == '2' && valorSelecionadoCaixa02 == '3'){
        const resultado = ((valorTemperatura.value - 32) * 5/9) + 273.15 
        temperatura01.innerHTML = `${valorTemperatura.value} f°`
        temperatura02.innerHTML = `${resultado.toFixed(3)} k° `
    }else if(valorSelecionadoCaixa01 == '3' && valorSelecionadoCaixa02 == '1'){
        const resultado = valorTemperatura.value - 273.15 
        temperatura01.innerHTML = `${valorTemperatura.value} k°`
        temperatura02.innerHTML = `${resultado.toFixed(2)} c° `
    }else if( valorSelecionadoCaixa01 == '3' && valorSelecionadoCaixa02 == '3'){
        temperatura01.innerHTML = `${valorTemperatura.value} k°`
        temperatura02.innerHTML = `${valorTemperatura.value} k°`

    }
    else if(valorSelecionadoCaixa01 == '3' && valorSelecionadoCaixa02 == '2'){
        const resultado = (valorTemperatura.value - 273.15) * 9/5 + 32 
        temperatura01.innerHTML = `${valorTemperatura.value} k°`
        temperatura02.innerHTML = `${resultado.toFixed(2)} f° `
    }

    
 })

