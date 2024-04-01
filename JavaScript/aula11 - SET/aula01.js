const caixa = document.getElementById('caixa')

let timesFut = new Set(['STC', 'FLA', 'COR', 'BAR'])

timesFut.add('FLU')
timesFut.add('STC')
timesFut.add('BAR')
timesFut.add('RMD')

// O SET não permite elementos duplicados


timesFut.forEach((el)=>{
    caixa.innerHTML += el + '<br/>' 
})