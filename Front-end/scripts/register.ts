document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get("tipo");

    const formTitle = document.getElementById("form-title") as HTMLHeadingElement;
    const cpfCnpjLabel = document.getElementById("cpf-cnpj-label") as HTMLLabelElement;
    const idadePaisLabel = document.getElementById("idade-pais-label") as HTMLLabelElement;
    const idadePaisInput = document.getElementById("idade-pais") as HTMLInputElement;
    const paisGroup = document.getElementById("pais-group") as HTMLElement;
    const idadeGroup = document.getElementById("idade-group") as HTMLElement;
    const cadastroForm = document.getElementById("register-form") as HTMLFormElement;

    // Validações com Regex
    const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    const regexCEP = /^[0-9]{5}-[0-9]{3}$/;
    const regexTags = /^[A-Za-z, ]+$/;  // Apenas letras e vírgulas

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
    } else {
        // Exibe o formulário para o candidato
        formTitle.textContent = "Cadastro de Candidato";
        cpfCnpjLabel.textContent = "CPF:";
        idadePaisLabel.textContent = "Idade:";
        idadePaisInput.id = "idade";
        idadePaisInput.type = "number";
        paisGroup.style.display = "block";
        idadeGroup.style.display = "block";
    }

    cadastroForm.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const documento = (document.getElementById("documento") as HTMLInputElement).value.trim();
        const idadePais = idadePaisInput.value.trim();
        const estado = (document.getElementById("estado") as HTMLInputElement).value.trim();
        const cep = (document.getElementById("cep") as HTMLInputElement).value.trim();
        const descricao = (document.getElementById("descricao") as HTMLTextAreaElement).value.trim();
        const competenciasInput = (document.getElementById("competencias") as HTMLTextAreaElement).value.trim();
        const telefone = (document.getElementById("telefone") as HTMLInputElement).value.trim();
        const linkedin = (document.getElementById("linkedin") as HTMLInputElement)?.value.trim();  // LinkedIn

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
        } else if (tipo === "candidato" && !regexCPF.test(documento)) {
            alert("⚠️ CPF inválido!");
            return;
        }

        // Telefone
        if (!telefone || !regexTelefone.test(telefone)) {
            alert("⚠️ Telefone inválido! Utilize o formato (XX) XXXXX-XXXX");
            return;
        }

        // Tags (apenas letras e vírgulas)
        const competencias = competenciasInput
            .split(",")
            .map(c => c.trim())
            .filter(c => c !== "");
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
        const user = {
            tipo,
            nome,
            email,
            cpf: documento,
            idadePais,
            estado,
            cep,
            descricao,
            telefone,
            linkedin,
            competencias,
            password: "123456"
        };

        // Armazenamento no localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem(email, JSON.stringify(user));
        localStorage.setItem("currentUser", email);

        alert("✅ Cadastro realizado com sucesso!");
        window.location.href = tipo === "empresa" ? "../pages/company.html" : "../pages/candidate.html";
    });
});
