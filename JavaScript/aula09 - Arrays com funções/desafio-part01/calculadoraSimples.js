const selectioOperations = document.getElementById('operations');
const btnCalculate = document.getElementById('btn-calculate');


btnCalculate.addEventListener('click', (event)=>{
    const boxValue01 = document.getElementById('box-01')
    const boxValue02 = document.getElementById('box-02')
    
    
    let value = [boxValue01.value, boxValue02.value];

    const operations = [
        multiplication =(val)=>{
            let res = 1;
            for (let v of val){
                res *= v
            }
            return res
        },
        division =(val)=>{
            let res = 1;
            for (let v of val){
                res /= v
            }
            return res
        }
    ]

    alert(operations[1](value))
})