package models

import models.PessoaBase

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

    static List<String> escolherCompetencias() {
        return COMPETENCIAS_DISPONIVEIS
    }
}
