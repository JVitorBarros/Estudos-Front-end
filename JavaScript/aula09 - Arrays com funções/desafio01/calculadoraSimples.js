const btnCalculate = document.getElementById('btn-calculate');

btnCalculate.addEventListener('click', (event) => {
    const boxValue01 = document.getElementById('box-01');
    const boxValue02 = document.getElementById('box-02');
    const selectioOperations = document.getElementById('operations');

    let value = [boxValue01.value, boxValue02.value]; 

    const operations = [
        multiplication = (val) => {
            const res = Number(val[0]) * Number(val[1]);
            return res;
        },
        division = (val) => {
            const res = Number(val[0]) / Number(val[1]);
            return res;
        },
        subtraction = (val) => {
            const res = Number(val[0]) - Number(val[1]);
            return res;
        },
        sum = (val) => {
            const res = Number(val[0]) + Number(val[1]);
            return res;
        }
    ];

    if (selectioOperations.value == 1) {
        alert(operations[0](value));
    } else if (selectioOperations.value == 2) {
        alert(operations[1](value));
    } else if (selectioOperations.value == 3) {
        alert(operations[2](value));
    } else if (selectioOperations.value == 4) {
        alert(operations[3](value));
    }
});