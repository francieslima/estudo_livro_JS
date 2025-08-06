// cria refências ao form e elementos HTML
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado ao clicar no botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form

    const nome = frm.inNome.value; // obtém valores do Form
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    let peso;    //declara a variável peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    // Apresenta a resposta
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`;

    frm.addEventListener("reset", () => {
        resp.innerText = "" //limpa o conteúdo do elemento h3
    })
}) 