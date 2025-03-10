// Interface Candidato
interface Candidato {
    id: number;
    competencias: string[];
    formacao: string;
}

// Função para exibir ou ocultar seções
function showSectionn(sectionId: string) {
    document.querySelectorAll(".content section").forEach((section) => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId)?.classList.remove("hidden");
}

// Função para carregar o perfil da empresa logada
function carregarPerfilEmpresa() {
    const emailUsuarioLogado = localStorage.getItem("currentUser");

    if (!emailUsuarioLogado) {
        console.warn("Nenhum usuário logado encontrado.");
        return;
    }

    const empresaJson = localStorage.getItem(emailUsuarioLogado);

    if (empresaJson) {
        const empresa = JSON.parse(empresaJson);

        // Exibindo as informações do perfil da empresa
        const nome = document.getElementById("nome") as HTMLSpanElement;
        const email = document.getElementById("email") as HTMLSpanElement;
        const cnpj = document.getElementById("cnpj") as HTMLSpanElement;
        const pais = document.getElementById("pais") as HTMLSpanElement;
        const estado = document.getElementById("estado") as HTMLSpanElement;
        const cep = document.getElementById("cep") as HTMLSpanElement;
        const descricao = document.getElementById("descricao") as HTMLSpanElement;
        const competencias = document.getElementById("competencias") as HTMLSpanElement;

        // Verifique se o valor existe antes de atribuir ao campo
        nome.textContent = empresa.nome || "Não especificado";
        email.textContent = empresa.email || "Não especificado";
        cnpj.textContent = empresa.documento || "Não especificado";  // Atualizado para 'documento'
        pais.textContent = empresa.idadePais || "Não especificado";  // Atualizado para 'idadePais'
        estado.textContent = empresa.estado || "Não especificado";
        cep.textContent = empresa.cep || "Não especificado";
        descricao.textContent = empresa.descricao || "Não especificado";
        
        // Verifica se 'competenciasDesejadas' é um array válido e se não, usa um array vazio
        competencias.textContent = Array.isArray(empresa.competenciasDesejadas) && empresa.competenciasDesejadas.length > 0
            ? empresa.competenciasDesejadas.join(", ")
            : "Não especificado";
    } else {
        console.error("Perfil da empresa não encontrado.");
    }
}

// Função para carregar os candidatos anonimamente
function carregarCandidatos(): void {
    const candidatos: Candidato[] = [
        { id: 1, competencias: ["React", "Node.js"], formacao: "Ciência da Computação" },
        { id: 2, competencias: ["Python", "Django"], formacao: "Engenharia de Software" },
        { id: 3, competencias: ["Java", "Spring Boot"], formacao: "Sistemas de Informação" },
        { id: 4, competencias: ["JavaScript", "React"], formacao: "Análise e Desenvolvimento de Sistemas" }
    ];

    const listaCandidatos = document.getElementById("lista-candidatos")!;
    listaCandidatos.innerHTML = "";

    // Contador de competências para gráfico
    const competenciaCount: { [competencia: string]: number } = {};

    for (const candidato of candidatos) {
        const li = document.createElement("li");
        li.classList.add("candidato");

        const candidatoNome = document.createElement("p");
        candidatoNome.textContent = `Candidato ${candidato.id}`;

        const candidatoInfo = document.createElement("p");
        candidatoInfo.classList.add("info-candidato");
        candidatoInfo.textContent = `Formação: ${candidato.formacao} | Skills: ${candidato.competencias.join(", ")}`;

        li.appendChild(candidatoNome);
        li.appendChild(candidatoInfo);
        listaCandidatos.appendChild(li);

        // Contabiliza as competências dos candidatos
        for (const competencia of candidato.competencias) {
            if (competenciaCount[competencia]) {
                competenciaCount[competencia]++;
            } else {
                competenciaCount[competencia] = 1;
            }
        }
    }

    // Chama a função para desenhar o gráfico com as competências
    desenharGraficoCompetencias(competenciaCount);
}

// Função para desenhar gráfico de competências com Chart.js
function desenharGraficoCompetencias(competenciaCount: { [competencia: string]: number }) {
    const ctx = document.getElementById("competenciaChart") as HTMLCanvasElement;
    const competencias = Object.keys(competenciaCount);
    const quantidade = Object.values(competenciaCount);

    const chart = new Chart(ctx, {
        type: 'bar',  // Tipo de gráfico
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
            scales: {

            }
        }
    });
}

// Função para salvar o perfil da empresa no localStorage
function salvarPerfilEmpresa(nome: string, email: string, cnpj: string, pais: string, estado: string, cep: string, descricao: string, competencias: string) {
    const empresa = {
        nome,
        email,
        documento: cnpj,  // Alterado para 'documento' ao invés de 'cnpj'
        idadePais: pais,  // Alterado para 'idadePais' ao invés de 'pais'
        estado,
        cep,
        descricao,
        competenciasDesejadas: competencias.split(",").map((c) => c.trim())  // Transforma a string de competências em um array
    };

    // Salva os dados no localStorage, utilizando o email como chave
    localStorage.setItem(email, JSON.stringify(empresa));
    alert("Perfil da empresa salvo com sucesso!");
}

// Função que simula o logout
function logoutC(): void {
    localStorage.removeItem("currentUser"); // Remove o usuário logado
    alert("Logout realizado com sucesso!");
    window.location.href = "../pages/index.html";
}

// Quando o DOM estiver carregado, chama as funções
document.addEventListener("DOMContentLoaded", () => {
    carregarPerfilEmpresa();
    carregarCandidatos();
});
