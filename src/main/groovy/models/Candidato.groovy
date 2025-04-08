package models;

class Candidato {
    int id
    String nome
    String sobrenome
    String dataNascimento
    String email
    String cpf
    String pais
    String cep
    String descricao
    String senha

    String toString() {
        return "Candidato(id=$id, nome=$nome $sobrenome, email=$email, CPF=$cpf, País=$pais, CEP=$cep, Nascimento=$dataNascimento, Descrição=$descricao)"
    }
}
