let valores = [10, 2]
const operadores = [
    (val)=>{
        let res = 0
        for (v of val){
            res+=v
        }
        return res
    },
    (val)=>{
        let res = 1
        for (const v of val) {
            res *= v
        }
        return res
    }
]
console.log(operadores[1](valores))