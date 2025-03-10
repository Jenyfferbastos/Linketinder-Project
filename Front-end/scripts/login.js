document.addEventListener("DOMContentLoaded", function () {
    console.log("Script de login carregado!");
    function handleLogin(userType) {
        console.log("Tentando login como ".concat(userType));
        // Obtém os campos de entrada do e-mail e senha
        var emailInput = document.getElementById("email-".concat(userType));
        var passwordInput = document.getElementById("password-".concat(userType));
        if (!emailInput || !passwordInput) {
            console.error("Campos de login não encontrados!");
            alert("Erro: Campos de login não foram encontrados.");
            return;
        }
        var email = emailInput.value.trim();
        var password = passwordInput.value;
        // Validação dos campos
        if (email === "") {
            alert("Por favor, insira seu e-mail.");
            return;
        }
        if (password === "") {
            alert("Por favor, insira sua senha.");
            return;
        }
        // Simula autenticação com um usuário salvo no localStorage
        var storedUser = localStorage.getItem(email);
        if (!storedUser) {
            alert("Usuário não encontrado!");
            return;
        }
        var user = JSON.parse(storedUser);
        if (user.password !== password) {
            alert("Senha incorreta!");
            return;
        }
        // Armazena os dados do usuário logado
        localStorage.setItem("currentUser", email);
        localStorage.setItem("userType", userType);
        if (userType === "candidato") {
            // Salva os dados do candidato logado para exibição no perfil
            var candidatoLogado = {
                nome: user.nome,
                descricao: user.descricao,
                email: user.email,
                cpf: user.cpf,
                idade: user.idade,
                pais: user.pais,
                estado: user.estado,
                cep: user.cep,
                competencias: user.competencias || []
            };
            localStorage.setItem("candidatoLogado", JSON.stringify(candidatoLogado));
        }
        // Redireciona para a página de perfil
        var redirectPage = userType === "empresa" ? "company.html" : "candidate.html";
        console.log("\u2705 Redirecionando para: ".concat(redirectPage));
        window.location.href = redirectPage;
    }
    // Torna a função acessível no escopo global
    window.handleLogin = handleLogin;
});
