// Função para exibir ou ocultar seções
function showSectionn(sectionId) {
    var _a;
    document.querySelectorAll(".content section").forEach(function (section) {
        section.classList.add("hidden");
    });
    (_a = document.getElementById(sectionId)) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
}
// Função para carregar o perfil da empresa logada
function carregarPerfilEmpresa() {
    var emailUsuarioLogado = localStorage.getItem("currentUser");
    if (!emailUsuarioLogado) {
        console.warn("Nenhum usuário logado encontrado.");
        return;
    }
    var empresaJson = localStorage.getItem(emailUsuarioLogado);
    if (empresaJson) {
        var empresa = JSON.parse(empresaJson);
        // Exibindo as informações do perfil da empresa
        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var cnpj = document.getElementById("cnpj");
        var pais = document.getElementById("pais");
        var estado = document.getElementById("estado");
        var cep = document.getElementById("cep");
        var descricao = document.getElementById("descricao");
        var competencias = document.getElementById("competencias");
        // Verifique se o valor existe antes de atribuir ao campo
        nome.textContent = empresa.nome || "Não especificado";
        email.textContent = empresa.email || "Não especificado";
        cnpj.textContent = empresa.documento || "Não especificado"; // Atualizado para 'documento'
        pais.textContent = empresa.idadePais || "Não especificado"; // Atualizado para 'idadePais'
        estado.textContent = empresa.estado || "Não especificado";
        cep.textContent = empresa.cep || "Não especificado";
        descricao.textContent = empresa.descricao || "Não especificado";
        // Verifica se 'competenciasDesejadas' é um array válido e se não, usa um array vazio
        competencias.textContent = Array.isArray(empresa.competenciasDesejadas) && empresa.competenciasDesejadas.length > 0
            ? empresa.competenciasDesejadas.join(", ")
            : "Não especificado";
    }
    else {
        console.error("Perfil da empresa não encontrado.");
    }
}
// Função para carregar os candidatos anonimamente
function carregarCandidatos() {
    var candidatos = [
        { id: 1, competencias: ["React", "Node.js"], formacao: "Ciência da Computação" },
        { id: 2, competencias: ["Python", "Django"], formacao: "Engenharia de Software" },
        { id: 3, competencias: ["Java", "Spring Boot"], formacao: "Sistemas de Informação" },
        { id: 4, competencias: ["JavaScript", "React"], formacao: "Análise e Desenvolvimento de Sistemas" }
    ];
    var listaCandidatos = document.getElementById("lista-candidatos");
    listaCandidatos.innerHTML = "";
    // Contador de competências para gráfico
    var competenciaCount = {};
    for (var _i = 0, candidatos_1 = candidatos; _i < candidatos_1.length; _i++) {
        var candidato = candidatos_1[_i];
        var li = document.createElement("li");
        li.classList.add("candidato");
        var candidatoNome = document.createElement("p");
        candidatoNome.textContent = "Candidato ".concat(candidato.id);
        var candidatoInfo = document.createElement("p");
        candidatoInfo.classList.add("info-candidato");
        candidatoInfo.textContent = "Forma\u00E7\u00E3o: ".concat(candidato.formacao, " | Skills: ").concat(candidato.competencias.join(", "));
        li.appendChild(candidatoNome);
        li.appendChild(candidatoInfo);
        listaCandidatos.appendChild(li);
        // Contabiliza as competências dos candidatos
        for (var _a = 0, _b = candidato.competencias; _a < _b.length; _a++) {
            var competencia = _b[_a];
            if (competenciaCount[competencia]) {
                competenciaCount[competencia]++;
            }
            else {
                competenciaCount[competencia] = 1;
            }
        }
    }
    // Chama a função para desenhar o gráfico com as competências
    desenharGraficoCompetencias(competenciaCount);
}
// Função para desenhar gráfico de competências com Chart.js
function desenharGraficoCompetencias(competenciaCount) {
    var ctx = document.getElementById("competenciaChart");
    var competencias = Object.keys(competenciaCount);
    var quantidade = Object.values(competenciaCount);
    var chart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico
        data: {
            labels: competencias,
            datasets: [{
                    label: 'Número de Candidatos por Competência',
                    data: quantidade,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
        },
        options: {
            scales: {}
        }
    });
}
// Função para salvar o perfil da empresa no localStorage
function salvarPerfilEmpresa(nome, email, cnpj, pais, estado, cep, descricao, competencias) {
    var empresa = {
        nome: nome,
        email: email,
        documento: cnpj, // Alterado para 'documento' ao invés de 'cnpj'
        idadePais: pais, // Alterado para 'idadePais' ao invés de 'pais'
        estado: estado,
        cep: cep,
        descricao: descricao,
        competenciasDesejadas: competencias.split(",").map(function (c) { return c.trim(); }) // Transforma a string de competências em um array
    };
    // Salva os dados no localStorage, utilizando o email como chave
    localStorage.setItem(email, JSON.stringify(empresa));
    alert("Perfil da empresa salvo com sucesso!");
}
// Função que simula o logout
function logoutC() {
    localStorage.removeItem("currentUser"); // Remove o usuário logado
    alert("Logout realizado com sucesso!");
    window.location.href = "../pages/index.html";
}
// Quando o DOM estiver carregado, chama as funções
document.addEventListener("DOMContentLoaded", function () {
    carregarPerfilEmpresa();
    carregarCandidatos();
});
