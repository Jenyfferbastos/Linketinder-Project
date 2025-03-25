document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get("tipo");

    const formTitle = document.getElementById("form-title") as HTMLHeadingElement | null;
    const cpfCnpjLabel = document.getElementById("cpf-cnpj-label") as HTMLLabelElement | null;
    const idadePaisLabel = document.getElementById("idade-pais-label") as HTMLLabelElement | null;
    const idadePaisInput = document.getElementById("idade-pais") as HTMLInputElement | null;
    const paisGroup = document.getElementById("pais-group") as HTMLElement | null;
    const idadeGroup = document.getElementById("idade-group") as HTMLElement | null;
    const cadastroForm = document.getElementById("register-form") as HTMLFormElement | null;

    if (!formTitle || !cpfCnpjLabel || !idadePaisLabel || !idadePaisInput || !paisGroup || !idadeGroup || !cadastroForm) {
        console.error(" Erro: Um ou mais elementos do formulário não foram encontrados!");
        return;
    }

    if (tipo === "empresa") {
        // Exibe o formulário para a empresa
        formTitle.textContent = "Cadastro de Empresa";
        cpfCnpjLabel.textContent = "CNPJ:";
        idadePaisLabel.textContent = "País:";  // Label de país para a empresa
        idadePaisInput.id = "pais";  // Campo de país
        idadePaisInput.type = "text";  // Tipo texto para o país
        paisGroup.style.display = "block";  // Exibe o campo de país
        idadeGroup.style.display = "none";  // Esconde o campo de idade
    } else {
        // Exibe o formulário para o candidato
        formTitle.textContent = "Cadastro de Candidato";
        cpfCnpjLabel.textContent = "CPF:";
        idadePaisLabel.textContent = "Idade:";  // Label de idade para o candidato
        idadePaisInput.id = "idade";  // Campo de idade
        idadePaisInput.type = "number";  // Tipo número para a idade
        paisGroup.style.display = "block";  // Exibe o campo de país
        idadeGroup.style.display = "block";  // Exibe o campo de idade
    }

    cadastroForm.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement | null)?.value.trim();
        const email = (document.getElementById("email") as HTMLInputElement | null)?.value.trim();
        const documento = (document.getElementById("documento") as HTMLInputElement | null)?.value.trim();
        const idadePais = idadePaisInput.value.trim();
        const estado = (document.getElementById("estado") as HTMLInputElement | null)?.value.trim();
        const cep = (document.getElementById("cep") as HTMLInputElement | null)?.value.trim();
        const descricao = (document.getElementById("descricao") as HTMLTextAreaElement | null)?.value.trim();
        const competenciasInput = document.getElementById("competencias") as HTMLTextAreaElement | null;
        
        // Verificar se o campo de competências não é undefined ou vazio
        const competencias = competenciasInput ? competenciasInput.value
            .split(",")
            .map(c => c.trim())
            .filter(c => c !== "") : [];

        // Verificação de campos obrigatórios
        if (!nome || !email || !documento || !estado || !cep || !descricao || competencias.length === 0 || 
            (tipo === "candidato" && !idadePais)) {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        // Criação do objeto user com os campos corrigidos
        const user = {
            tipo,
            nome,
            email,
            cpf: documento, 
            idadePais,
            pais: idadePais, 
            estado,
            cep,
            descricao,
            competencias,
            password: "123456"
        };

        // Armazenamento dos dados no localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem(email, JSON.stringify(user));  // Salva os dados da empresa no localStorage
        localStorage.setItem("currentUser", email);  // Define o usuário logado com o email

        alert("✅ Cadastro realizado com sucesso!");
        window.location.href = tipo === "empresa" ? "../pages/company.html" : "../pages/candidate.html";
    });
});
