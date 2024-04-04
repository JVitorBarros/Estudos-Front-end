const objetos = document.getElementById('objetos');

const computador = {
    cpu: "i9",
    ram: '64gb',
    hd: '2tb'
}

console.log(computador)
objetos.innerHTML = computador
objetos.innerHTML = JSON.stringify(computador)
