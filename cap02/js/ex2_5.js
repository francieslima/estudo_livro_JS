// criando as referências aos elementos HTML
const frm = document.querySelector("form");
const nomeMedicamento = document.querySelector("#inMedicamento");
const precoMedicamento = document.querySelector("#inPreco");
const resp1 = document.querySelector("#outMedicamento");
const resp2 = document.querySelector("#outPromocao");

// criando o "ouvinte" de evento para o formulário
frm.addEventListener("submit", (e) => {
    
    const nome = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);
    total = preco * 2;   
    desconto = Math.floor(total);

    resp1.innerText = `Promoção de ${nome}`;
    resp2.innerText = `Leve 2 por apenas R$ ${desconto.toFixed(2)}`;
    // previne o comportamento padrão do form (que é recarregar a página)
    e.preventDefault();
})