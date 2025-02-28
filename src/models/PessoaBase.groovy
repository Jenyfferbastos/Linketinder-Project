package src.models

abstract class PessoaBase implements Pessoa {
    String nome
    String email
    String estado
    String cep
    String descricao

    PessoaBase(String nome, String email, String estado, String cep, String descricao) {
        this.nome = nome
        this.email = email
        this.estado = estado
        this.cep = cep
        this.descricao = descricao
    }

    @Override
    String getNome() {
        return nome
    }

    @Override
    String getEmail() {
        return email
    }

    String getEndereco() {
        return "Estado: $estado, CEP: $cep"
    }

    @Override
    String toString() {
        return """
        Nome: ${nome}
        Email: ${email}
        Estado: ${estado}
        CEP: ${cep}
        Descrição: ${descricao}
        """.stripIndent()
    }
}
