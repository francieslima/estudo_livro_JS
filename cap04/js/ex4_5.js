const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    const numero = Number(frm.inNumero.value);
    const raiz = Math.sqrt(numero);

    if(Number.isInteger(raiz)) {    // se o valor da raiz quadrada for inteiro
        resp.innerText = `Raiz: ${raiz}`;   // mostra a raiz
    } else {
        resp.innerText = `Não há raiz exata para ${numero}` // ...mostra mensagem
    }
})