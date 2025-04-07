package models

import models.PessoaBase

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

    static List<String> escolherCompetencias() {
        return COMPETENCIAS_DISPONIVEIS
    }
}
