const botaoDestaque = document.querySelector("#botaoDestaque");
const servicos = document.querySelector("#servicos");
const formContato = document.querySelector("#formContato");
const resposta = document.querySelector("#resposta");

botaoDestaque.style.backgroundColor = "#003b57";

const botaoEnviar = formContato.querySelector("button");
botaoEnviar.style.backgroundColor = "#003b57";

botaoDestaque.addEventListener("click", () => {
    servicos.scrollIntoView({ behavior: "smooth" });
});

formContato.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.querySelector("#nome").value;
    resposta.textContent = `Obrigado pelo contato, ${nome}!`;
});
