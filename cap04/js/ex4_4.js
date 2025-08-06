// cria referência ao form e ao elemento onde será exibida a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte"
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obtém e converte o conteúdo do campo inHora Brasil
    const horaBrasil = Number(frm.inHoraBrasil.value);
    let horaFranca = horaBrasil + 5; // calcula o horário na França
    if (horaFranca > 24) { // se passar das 24 horas na França
        horaFranca = horaFranca - 24; //... subtrai 24
    }

    // exibe a resposta
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
})