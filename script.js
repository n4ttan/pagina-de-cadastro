document.addEventListener("DOMContentLoaded", function() {
    const fotoInput = document.getElementById("foto");
    const preview = document.getElementById("preview");

    fotoInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    const botaoSalvar = document.getElementById("salvar");
    botaoSalvar.addEventListener("click", function() {
        alert("Dados salvos com sucesso!");
    });

    const botaoSair = document.getElementById("sair");
    botaoSair.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const senha = document.getElementById('senha').value;

        const senhaCorreta = 'senhaCorreta';

        if (senha === senhaCorreta) {
            window.location.href = 'perfil.html';
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });

    document.getElementById('mostrar-senha').addEventListener('click', function() {
        const senhaInput = document.getElementById('senha');
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
            this.textContent = 'Ocultar';
        } else {
            senhaInput.type = 'password';
            this.textContent = 'Mostrar';
        }
    });
});