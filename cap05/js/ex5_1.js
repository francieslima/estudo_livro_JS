const frm = document.querySelector("form"); //obtém elementos da página
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => { //"escuta" o evento submit do form
    e.preventDefault();                 // evita o envio do form

    const numero = frm.inNumero.value;  // obtém o número informado
    let resposta = ""                   // variável do tipo String para concatenar a resposta

    // cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for(let i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"  // forma de resolução 1
        // resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`           // forma de resolução 2
    }
    // o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta;
})