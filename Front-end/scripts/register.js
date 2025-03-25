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
    // Validações com Regex
    var regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    var regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    var regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    var regexCEP = /^[0-9]{5}-[0-9]{3}$/;
    var regexTags = /^[A-Za-z, ]+$/; // Apenas letras e vírgulas
    // Verificar se os elementos existem
    if (!formTitle || !cpfCnpjLabel || !idadePaisLabel || !idadePaisInput || !paisGroup || !idadeGroup || !cadastroForm) {
        console.error("❌ Erro: Um ou mais elementos do formulário não foram encontrados!");
        return;
    }
    if (tipo === "empresa") {
        // Exibe o formulário para a empresa
        formTitle.textContent = "Cadastro de Empresa";
        cpfCnpjLabel.textContent = "CNPJ:";
        idadePaisLabel.textContent = "País:";
        idadePaisInput.id = "pais";
        idadePaisInput.type = "text";
        paisGroup.style.display = "block";
        idadeGroup.style.display = "none";
    }
    else {
        // Exibe o formulário para o candidato
        formTitle.textContent = "Cadastro de Candidato";
        cpfCnpjLabel.textContent = "CPF:";
        idadePaisLabel.textContent = "Idade:";
        idadePaisInput.id = "idade";
        idadePaisInput.type = "number";
        paisGroup.style.display = "block";
        idadeGroup.style.display = "block";
    }
    cadastroForm.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var documento = document.getElementById("documento").value.trim();
        var idadePais = idadePaisInput.value.trim();
        var estado = document.getElementById("estado").value.trim();
        var cep = document.getElementById("cep").value.trim();
        var descricao = document.getElementById("descricao").value.trim();
        var competenciasInput = document.getElementById("competencias").value.trim();
        var telefone = document.getElementById("telefone").value.trim();
        var linkedin = (_a = document.getElementById("linkedin")) === null || _a === void 0 ? void 0 : _a.value.trim(); // LinkedIn
        // Validação dos campos
        // Nome (apenas letras)
        if (!regexNome.test(nome)) {
            alert("⚠️ Nome inválido! Deve conter apenas letras.");
            return;
        }
        // E-mail
        if (!regexEmail.test(email)) {
            alert("⚠️ E-mail inválido!");
            return;
        }
        // CPF ou CNPJ
        if (tipo === "empresa" && !regexCNPJ.test(documento)) {
            alert("⚠️ CNPJ inválido!");
            return;
        }
        else if (tipo === "candidato" && !regexCPF.test(documento)) {
            alert("⚠️ CPF inválido!");
            return;
        }
        // Telefone
        if (!telefone || !regexTelefone.test(telefone)) {
            alert("⚠️ Telefone inválido! Utilize o formato (XX) XXXXX-XXXX");
            return;
        }
        // Tags (apenas letras e vírgulas)
        var competencias = competenciasInput
            .split(",")
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ""; });
        if (!regexTags.test(competenciasInput) || competencias.length === 0) {
            alert("⚠️ Preencha ao menos uma tag ou competência válida!");
            return;
        }
        // CEP
        if (!regexCEP.test(cep)) {
            alert("⚠️ CEP inválido!");
            return;
        }
        // Idade (para candidatos)
        if (tipo === "candidato" && (!idadePais || isNaN(Number(idadePais)) || Number(idadePais) < 18 || Number(idadePais) > 100)) {
            alert("⚠️ Idade inválida! Insira um valor entre 18 e 100 anos.");
            return;
        }
        // Se o LinkedIn foi preenchido, vamos validar se é uma URL válida
        if (linkedin && !/^https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}\/[a-zA-Z0-9-]+$/.test(linkedin)) {
            alert("⚠️ Link do LinkedIn inválido!");
            return;
        }
        // Criação do objeto user
        var user = {
            tipo: tipo,
            nome: nome,
            email: email,
            cpf: documento,
            idadePais: idadePais,
            estado: estado,
            cep: cep,
            descricao: descricao,
            telefone: telefone,
            linkedin: linkedin,
            competencias: competencias,
            password: "123456"
        };
        // Armazenamento no localStorage
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem("currentUser", email);
        alert("✅ Cadastro realizado com sucesso!");
        window.location.href = tipo === "empresa" ? "../pages/company.html" : "../pages/candidate.html";
    });
});
