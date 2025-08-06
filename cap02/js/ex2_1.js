//cria referência ao form e ao elemento h3 (onde será exibida a resposta)
//const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = document.querySelector("form").inNome.value  // obtem o nome digitado no form
    resp.innerText = `Olá ${nome}`
    e.preventDefault() //evita o envio do form
})