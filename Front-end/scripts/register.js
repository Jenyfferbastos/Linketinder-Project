document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var tipo = urlParams.get("tipo");
    var formTitle = document.getElementById("form-title");
    var cpfCnpjLabel = document.getElementById("cpf-cnpj-label");
    var idadePaisLabel = document.getElementById("idade-pais-label");
    var idadePaisInput = document.getElementById("idade-pais");
    var paisGroup = document.getElementById("pais-group");
    var idadeGroup = document.getElementById("idade-group");
    var cadastroForm = document.getElementById("register-form");
    if (!formTitle || !cpfCnpjLabel || !idadePaisLabel || !idadePaisInput || !paisGroup || !idadeGroup || !cadastroForm) {
        console.error("❌ Erro: Um ou mais elementos do formulário não foram encontrados!");
        return;
    }
    if (tipo === "empresa") {
        // Exibe o formulário para a empresa
        formTitle.textContent = "Cadastro de Empresa";
        cpfCnpjLabel.textContent = "CNPJ:";
        idadePaisLabel.textContent = "País:"; // Label de país para a empresa
        idadePaisInput.id = "pais"; // Campo de país
        idadePaisInput.type = "text"; // Tipo texto para o país
        paisGroup.style.display = "block"; // Exibe o campo de país
        idadeGroup.style.display = "none"; // Esconde o campo de idade
    }
    else {
        // Exibe o formulário para o candidato
        formTitle.textContent = "Cadastro de Candidato";
        cpfCnpjLabel.textContent = "CPF:";
        idadePaisLabel.textContent = "Idade:"; // Label de idade para o candidato
        idadePaisInput.id = "idade"; // Campo de idade
        idadePaisInput.type = "number"; // Tipo número para a idade
        paisGroup.style.display = "block"; // Exibe o campo de país
        idadeGroup.style.display = "block"; // Exibe o campo de idade
    }
    cadastroForm.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        var nome = (_a = document.getElementById("nome")) === null || _a === void 0 ? void 0 : _a.value.trim();
        var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value.trim();
        var documento = (_c = document.getElementById("documento")) === null || _c === void 0 ? void 0 : _c.value.trim();
        var idadePais = idadePaisInput.value.trim();
        var estado = (_d = document.getElementById("estado")) === null || _d === void 0 ? void 0 : _d.value.trim();
        var cep = (_e = document.getElementById("cep")) === null || _e === void 0 ? void 0 : _e.value.trim();
        var descricao = (_f = document.getElementById("descricao")) === null || _f === void 0 ? void 0 : _f.value.trim();
        var competenciasInput = document.getElementById("competencias");
        // Verificar se o campo de competências não é undefined ou vazio
        var competencias = competenciasInput ? competenciasInput.value
            .split(",")
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ""; }) : [];
        // Verificação de campos obrigatórios
        if (!nome || !email || !documento || !estado || !cep || !descricao || competencias.length === 0 ||
            (tipo === "candidato" && !idadePais)) {
            alert("⚠️ Preencha todos os campos!");
            return;
        }
        // Criação do objeto user com os campos corrigidos
        var user = {
            tipo: tipo,
            nome: nome,
            email: email,
            cpf: documento, // Alterado para 'cpf'
            idadePais: idadePais,
            pais: idadePais, // Alterado para 'pais'
            estado: estado,
            cep: cep,
            descricao: descricao,
            competencias: competencias,
            password: "123456"
        };
        // Armazenamento dos dados no localStorage
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem(email, JSON.stringify(user)); // Salva os dados da empresa no localStorage
        localStorage.setItem("currentUser", email); // Define o usuário logado com o email
        alert("✅ Cadastro realizado com sucesso!");
        window.location.href = tipo === "empresa" ? "../pages/company.html" : "../pages/candidate.html";
    });
});
