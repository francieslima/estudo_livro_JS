//cria referência para os elementos HTML
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria a função para calcular a situação do aluno
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //previne o envio do formulário

    const nome = frm.inNome.value; //obtém os valores do formulário
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2; //calcula a média
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`; //exibe a média formatada

    // cria as condições para verificar a situação do aluno
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "blue"; //define a cor do texto para azul
    } else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}! Você está em exame`;
        resp2.style.color = "green"; //define a cor do texto para verde
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`;
        resp2.style.color = "red"; //define a cor do texto para vermelho
    }
    
})