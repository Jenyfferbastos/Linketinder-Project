document.addEventListener("DOMContentLoaded", function () {
    carregarPerfilCandidato();
    carregarVagas();
});
function carregarPerfilCandidato() {
    // Obtém o e-mail do candidato logado
    var emailCandidato = localStorage.getItem("currentUser");
    if (!emailCandidato) {
        console.error("Nenhum candidato logado encontrado.");
        alert("Erro: Nenhum candidato logado encontrado.");
        return;
    }
    // Busca os dados do candidato usando o e-mail
    var candidatoLogado = localStorage.getItem(emailCandidato);
    if (!candidatoLogado) {
        console.error("Erro ao recuperar os dados do candidato.");
        alert("Erro: Dados do candidato não encontrados.");
        return;
    }
    // Converte os dados armazenados para um objeto
    var candidato = JSON.parse(candidatoLogado);
    // Preenche os dados no HTML
    document.getElementById("nome").textContent = candidato.nome || "Não informado";
    document.getElementById("descricao").textContent = candidato.descricao || "Não informado";
    document.getElementById("email").textContent = candidato.email || "Não informado";
    document.getElementById("cpf").textContent = candidato.cpf || "Não informado"; // Alterado para 'candidato.cpf'
    document.getElementById("idade").textContent = candidato.idadePais ? candidato.idadePais.toString() : "Não informado";
    document.getElementById("pais").textContent = candidato.pais || "Não informado"; // Alterado para 'candidato.pais'
    document.getElementById("estado").textContent = candidato.estado || "Não informado";
    document.getElementById("cep").textContent = candidato.cep || "Não informado";
    document.getElementById("competencias").textContent = candidato.competencias ? candidato.competencias.join(", ") : "Nenhuma competência cadastrada";
}
function carregarVagas() {
    var vagas = [
        { titulo: "Desenvolvedor Frontend", skills: "TypeScript, Angular" },
        { titulo: "Engenheiro de Software", skills: "Java, PostgreSQL, Angular" }
    ];
    var listaVagas = document.getElementById("lista-vagas");
    listaVagas.innerHTML = "";
    vagas.forEach(function (vaga) {
        var li = document.createElement("li");
        li.textContent = "".concat(vaga.titulo, " - ").concat(vaga.skills);
        listaVagas.appendChild(li);
    });
}
function logout() {
    // Remove os dados do candidato do localStorage
    localStorage.removeItem("candidatoLogado");
    alert("Logout realizado com sucesso!");
    window.location.href = "../pages/index.html"; // Redireciona para a tela inicial
}
function showSection(sectionId) {
    // Esconde todas as seções
    var sections = document.querySelectorAll(".section");
    sections.forEach(function (section) { return section.classList.add("hidden"); });
    // Mostra a seção selecionada
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove("hidden");
    }
}
// Garante que a função esteja disponível no escopo global
window.showSection = showSection;
