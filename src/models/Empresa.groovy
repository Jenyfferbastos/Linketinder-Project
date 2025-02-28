package src.models

import groovy.json.JsonOutput
import groovy.json.JsonSlurper
import java.util.Scanner


class Empresa extends PessoaBase {
    String cnpj
    String pais
    List<String> competencias

    static final List<String> COMPETENCIAS_DISPONIVEIS = [
            "Java", "Python", "Spring Framework", "Angular", "React", "Node.js"
    ]

    Empresa(String nome, String email, String cnpj, String pais, String estado, String cep, String descricao, List<String> competencias) {
        super(nome, email, estado, cep, descricao)
        this.cnpj = cnpj
        this.pais = pais
        this.competencias = competencias ?: []
    }

    static List<String> escolherCompetencias() {
        Scanner scanner = new Scanner(System.in)
        println "Selecione as competências desejadas para os candidatos (digite o número correspondente, separando por vírgulas):"
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
        🏢 Empresa: ${nome}
        ✉ Email: ${email}
        🏛️ CNPJ: ${cnpj}
        🌍 País: ${pais}
        📍 Estado: ${estado}
        📮 CEP: ${cep}
        📝 Descrição: ${descricao}
        🎯 Competências desejadas: ${competencias.join(', ')}
        -------------------------------
        """.stripIndent()
    }

    static List<Empresa> carregarEmpresas(String arquivo) {
        File file = new File(arquivo)
        if (!file.exists()) return []

        List<Map> empresasJson = new JsonSlurper().parse(file)
        return empresasJson.collect { dados ->
            new Empresa(dados.nome, dados.email, dados.cnpj, dados.pais, dados.estado, dados.cep, dados.descricao, dados.competencias)
        }
    }

    static void salvarEmpresas(List<Empresa> empresas, String arquivo) {
        File file = new File(arquivo)
        file.text = JsonOutput.prettyPrint(JsonOutput.toJson(empresas.collect { e ->
            [
                    nome       : e.nome,
                    email      : e.email,
                    cnpj       : e.cnpj,
                    pais       : e.pais,
                    estado     : e.estado,
                    cep        : e.cep,
                    descricao  : e.descricao,
                    competencias: e.competencias
            ]
        }))
    }
}