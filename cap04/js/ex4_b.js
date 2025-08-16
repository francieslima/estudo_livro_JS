const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velCondutor = Number(frm.inVelCondutor.value);
    const velLimite = Number(frm.inVelPermitida.value);

    if (velCondutor <= velLimite) {
        resp.innerText = "Sem Multa";
    } else if ((velCondutor > velLimite) && (velCondutor <= (velLimite * 1.2))) {
        resp.innerText = "Multa Leve";
    } else {
        resp.innerText = "Multa Grave";
    }

});