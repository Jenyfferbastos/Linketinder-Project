document.addEventListener("DOMContentLoaded", function () {
    console.log("Script de login carregado!");

    function handleLogin(userType: string) {
        console.log(`Tentando login como ${userType}`);

        // Obtém os campos de entrada do e-mail e senha
        const emailInput = document.getElementById(`email-${userType}`) as HTMLInputElement | null;
        const passwordInput = document.getElementById(`password-${userType}`) as HTMLInputElement | null;

        if (!emailInput || !passwordInput) {
            console.error("Campos de login não encontrados!");
            alert("Erro: Campos de login não foram encontrados.");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value;

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
        const storedUser = localStorage.getItem(email);
        if (!storedUser) {
            alert("Usuário não encontrado!");
            return;
        }

        const user = JSON.parse(storedUser);
        if (user.password !== password) {
            alert("Senha incorreta!");
            return;
        }

        // Armazena os dados do usuário logado
        localStorage.setItem("currentUser", email);
        localStorage.setItem("userType", userType);

        if (userType === "candidato") {
            // Salva os dados do candidato logado para exibição no perfil
            const candidatoLogado = {
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
        const redirectPage = userType === "empresa" ? "company.html" : "candidate.html";
        console.log(`✅ Redirecionando para: ${redirectPage}`);
        window.location.href = redirectPage;
    }

    // Torna a função acessível no escopo global
    (window as any).handleLogin = handleLogin;
});
