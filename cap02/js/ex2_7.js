//criando referências aos elementos HTML
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outProduto");
const resp2 = document.querySelector("#outPromocao");

// criando o "ouvinte" de evento para o formulário
frm.addEventListener("submit", (e) => {
    const nome = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const valorPromocao = preco * 2.5; // calcula o valor promocional
    descontoProduto = preco * 0.5; // calcula o desconto

    resp1.innerText = `${nome} - Promoção: Leve 3 por R$: ${valorPromocao.toFixed(2)}`;
    resp2.innerText = `Desconto de R$: ${descontoProduto.toFixed(2)}`; // exibe o desconto
    // previne o comportamento padrão do form (que é recarregar a página)
    e.preventDefault();
})