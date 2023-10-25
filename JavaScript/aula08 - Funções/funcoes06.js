const soma = (...valores) =>{ /   // 10, 5, 15
    const somar = (val) =>{
        res = 0;
        for(let v of val){
            res +=v
        }
        return res
    }
    return somar(valores);
}

console.log(soma(10, 5, 15))