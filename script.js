document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("form-contato");
    
    form.addEventListener("submit", (evento) => {
        evento.preventDefault(); 
        
        let formValido = true;
        
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const servico = document.getElementById("servico"); // Pegamos o select
        
        // Limpa erros anteriores
        document.querySelectorAll(".erro-msg").forEach(msg => msg.classList.remove("ativo"));
        nome.classList.remove("erro-input");
        email.classList.remove("erro-input");
        servico.classList.remove("erro-input"); // Limpa o erro do select
        document.getElementById("feedback-sucesso").classList.add("hidden");

        // Valida Nome
        if (nome.value.trim() === "") {
            mostrarErro("erro-nome", nome, "Por favor, preencha seu nome.");
            formValido = false;
        }

        // Valida E-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            mostrarErro("erro-email", email, "Insira um e-mail válido (ex: seu@email.com).");
            formValido = false;
        }

        // NOVO: Valida Serviço
        if (servico.value === "") {
            mostrarErro("erro-servico", servico, "Por favor, selecione um serviço.");
            formValido = false;
        }

        // Sucesso
        if (formValido) {
            document.getElementById("feedback-sucesso").classList.remove("hidden");
            form.reset(); 
        }
    });

    function mostrarErro(idSpan, inputElement, mensagem) {
        const span = document.getElementById(idSpan);
        span.textContent = mensagem;
        span.classList.add("ativo");
        inputElement.classList.add("erro-input");
    }
});

function selecionarServico(valorDoServico) {
    document.getElementById("contato").scrollIntoView({ behavior: 'smooth' });
    const select = document.getElementById("servico");
    select.value = valorDoServico;
}