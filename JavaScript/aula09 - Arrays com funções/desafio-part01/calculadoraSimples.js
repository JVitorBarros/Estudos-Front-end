const selectioOperations = document.getElementById('operations');
const btnCalculate = document.getElementById('btn-calculate');


btnCalculate.addEventListener('click', (event)=>{
    const boxValue01 = document.getElementById('box-01')
    const boxValue02 = document.getElementById('box-02')
    
    
    let value = [boxValue01.value, boxValue02.value];

    const operations = [
        multiplication =(val)=>{
            const res = val[0] * val[1]
            return res
        },
        division=(val) => {
            const res = val[0] / val[1]
            return res
        },
        subtracao = (val) =>{
            
        },
        soma =(val)=>{
            
            
        }
       
    ]

    alert(operations[1](value))
})