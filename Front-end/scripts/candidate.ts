document.addEventListener("DOMContentLoaded", () => {
    carregarPerfilCandidato();
    carregarVagas();
});

function carregarPerfilCandidato(): void {
    // Obtém o e-mail do candidato logado
    const emailCandidato = localStorage.getItem("currentUser");

    if (!emailCandidato) {
        console.error("Nenhum candidato logado encontrado.");
        alert("Erro: Nenhum candidato logado encontrado.");
        return;
    }

    // Busca os dados do candidato usando o e-mail
    const candidatoLogado = localStorage.getItem(emailCandidato);

    if (!candidatoLogado) {
        console.error("Erro ao recuperar os dados do candidato.");
        alert("Erro: Dados do candidato não encontrados.");
        return;
    }

    // Converte os dados armazenados para um objeto
    const candidato = JSON.parse(candidatoLogado);

    // Preenche os dados no HTML
    (document.getElementById("nome") as HTMLSpanElement).textContent = candidato.nome || "Não informado";
    (document.getElementById("descricao") as HTMLSpanElement).textContent = candidato.descricao || "Não informado";
    (document.getElementById("email") as HTMLSpanElement).textContent = candidato.email || "Não informado";
    (document.getElementById("cpf") as HTMLSpanElement).textContent = candidato.cpf || "Não informado";  // Alterado para 'candidato.cpf'
    (document.getElementById("idade") as HTMLSpanElement).textContent = candidato.idadePais ? candidato.idadePais.toString() : "Não informado";
    (document.getElementById("pais") as HTMLSpanElement).textContent = candidato.pais || "Não informado";  // Alterado para 'candidato.pais'
    (document.getElementById("estado") as HTMLSpanElement).textContent = candidato.estado || "Não informado";
    (document.getElementById("cep") as HTMLSpanElement).textContent = candidato.cep || "Não informado";
    (document.getElementById("competencias") as HTMLSpanElement).textContent = candidato.competencias ? candidato.competencias.join(", ") : "Nenhuma competência cadastrada";
}

function carregarVagas(): void {
    const vagas = [
        { titulo: "Desenvolvedor Frontend", skills: "TypeScript, Angular" },
        { titulo: "Engenheiro de Software", skills: "Java, PostgreSQL, Angular" }
    ];

    const listaVagas = document.getElementById("lista-vagas") as HTMLUListElement;
    listaVagas.innerHTML = "";

    vagas.forEach(vaga => {
        const li = document.createElement("li");
        li.textContent = `${vaga.titulo} - ${vaga.skills}`;
        listaVagas.appendChild(li);
    });
}

function logout(): void {
    // Remove os dados do candidato do localStorage
    localStorage.removeItem("candidatoLogado");

    alert("Logout realizado com sucesso!");
    window.location.href = "../pages/index.html"; // Redireciona para a tela inicial
}

function showSection(sectionId: string): void {
    // Esconde todas as seções
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.add("hidden"));

    // Mostra a seção selecionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }
}

// Garante que a função esteja disponível no escopo global
(window as any).showSection = showSection;
