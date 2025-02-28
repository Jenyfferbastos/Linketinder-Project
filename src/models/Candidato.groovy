package src.models

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import java.util.Scanner


class Candidato extends PessoaBase {
    String cpf
    int idade
    List<String> competencias

    static final List<String> COMPETENCIAS_DISPONIVEIS = [
            "Java", "Python", "Spring Framework", "Angular", "React", "Node.js"
    ]

    Candidato(String nome, String email, String cpf, int idade, String estado, String cep, String descricao, List<String> competencias) {
        super(nome, email, estado, cep, descricao)
        this.cpf = cpf
        this.idade = idade
        this.competencias = competencias ?: []
    }

    static List<String> escolherCompetencias() {
        Scanner scanner = new Scanner(System.in)
        println "Selecione suas competências (digite o número correspondente, separando por vírgulas):"
        COMPETENCIAS_DISPONIVEIS.eachWithIndex { comp, index ->
            println "${index + 1} - ${comp}"
        }
        println "0 - Outro (digite sua própria competência)"

        return lerCompetenciasUsuario(scanner)
    }

    private static List<String> lerCompetenciasUsuario(Scanner scanner) {
        String input = scanner.nextLine()
        List<String> selecionadas = []

        input.split(",").each { escolha ->
            escolha = escolha.trim()
            if (escolha.isNumber()) {
                int index = escolha.toInteger()
                if (index > 0 && index <= COMPETENCIAS_DISPONIVEIS.size()) {
                    selecionadas << COMPETENCIAS_DISPONIVEIS[index - 1]
                } else if (index == 0) {
                    println "Digite sua própria competência:"
                    String novaComp = scanner.nextLine()
                    if (novaComp) selecionadas << novaComp
                }
            }
        }
        return selecionadas
    }

    @Override
    String toString() {
        return """
        📌 Candidato: ${nome}
        ✉ Email: ${email}
        🆔 CPF: ${cpf}
        🎂 Idade: ${idade}
        📍 Estado: ${estado}
        📮 CEP: ${cep}
        📝 Descrição: ${descricao}
        💼 Competências: ${competencias.join(', ')}
        -------------------------------
        """.stripIndent()
    }

    static List<Candidato> carregarCandidatos(String arquivo) {
        File file = new File(arquivo)
        if (!file.exists()) return []

        List<Map> candidatosJson = new JsonSlurper().parse(file)
        return candidatosJson.collect { dados ->
            new Candidato(dados.nome, dados.email, dados.cpf, dados.idade, dados.estado, dados.cep, dados.descricao, dados.competencias)
        }
    }

    static void salvarCandidatos(List<Candidato> candidatos, String arquivo) {
        File file = new File(arquivo)
        file.text = JsonOutput.prettyPrint(JsonOutput.toJson(candidatos.collect { c ->
            [
                    nome       : c.nome,
                    email      : c.email,
                    cpf        : c.cpf,
                    idade      : c.idade,
                    estado     : c.estado,
                    cep        : c.cep,
                    descricao  : c.descricao,
                    competencias: c.competencias
            ]
        }))
    }
}