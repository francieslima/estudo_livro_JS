// criando as referências ao elementos HTML
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// criando o "ouvinte" de evento para o formulário
frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempoUso.value);
    tempoValor = tempo / 15;
    const valorUso = valor * tempoValor.toFixed(2); // calcula o valor total
    const valorTotal = Math.ceil(valorUso); // arredonda para cima
    resp.innerText = `Valor a Pagar R$: ${valorTotal.toFixed(2)}`; // exibe resposta

    e.preventDefault(); // previne o comportamento padrão do form (que é recarregar a página)
})