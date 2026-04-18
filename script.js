// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagem");

        if (email === "admin@email.com" && senha === "123456") {
            mensagem.style.color = "green";
            mensagem.textContent = "Login realizado com sucesso!";
        } else {
            mensagem.style.color = "red";
            mensagem.textContent = "E-mail ou senha inválidos.";
        }
    });
}

// Cadastro
const cadastroForm = document.getElementById("cadastroForm");
if (cadastroForm) {
    cadastroForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const senha = document.getElementById("senhaCadastro").value;
        const mensagemCadastro = document.getElementById("mensagemCadastro");

        if (senha.length < 6) {
            mensagemCadastro.textContent = "A senha deve ter no mínimo 6 caracteres.";
        } else {
            mensagemCadastro.style.color = "green";
            mensagemCadastro.textContent = "Usuário cadastrado com sucesso!";
        }
    });
}