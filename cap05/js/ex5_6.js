const frm = document.querySelector("form");     // obtém elementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.defaultPrevented();   // evita o envio do form

    const num = Number(frm.inNumero.value);     // obtém o número informado
    let numDivisores = 0;                       // declara e inicializa o contador

    for(let i = 1; i <= num; i++) {             // percorre todos os possíveis divisores de num
        if(num % i == 0) {                      // verifica se i (1, 2, 3...) é divisor do num
            numDivisores++;
        }
    }

    if(numDivisores == 2) {                     // se possui apenas 2 divisores, é primo
        resp.innerText = `${num} É primo`;
    } else {
        resp.innerText = `${num} Não é primo`;
    }
})