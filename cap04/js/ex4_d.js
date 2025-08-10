const frm = document.querySelector('form');
const resp1 = document.querySelector('#outTriangulo');
const resp2 = document.querySelector('#outTipo');

frm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        resp1.innerText = "Valores inválidos";
        resp2.innerText = "";
        return;
    } 
    
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        resp1.innerText = "Lados podem formar um triângulo";
        if (ladoA === ladoB && ladoB === ladoC) {
            resp2.innerText = "Tipo: Equilátero";
        } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
            resp2.innerText = "Tipo: Isósceles";
        } else {
            resp2.innerText = "Tipo: Escaleno";
        }
    }
})