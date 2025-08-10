const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTempo");
const resp2 = document.querySelector("#outTroco");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    if (valor < 1.00) {
        resp1.innerText = "Valor insuficiente"
    } else if (valor >= 1.00 && valor < 1.75) {
        resp1.innerText = "Tempo: 30 min";
        resp2.innerText = "Troco R$: " + (valor - 1.00).toFixed(2);
    } else if (valor < 3.00) {
        resp1.innerText = "Tempo: 60 min";
        resp2.innerText = "Troco R$: " + (valor - 1.75).toFixed(2);
    } else {
        resp1.innerText = "Tempo: 120 min";
        resp2.innerText = "Troco R$: " + (valor - 3.00).toFixed(2);
    }
})