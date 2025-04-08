package models

class Empresa {
    int id
    String nome
    String cnpj
    String email
    String descricao
    String pais
    String cep
    String senha

    @Override
    String toString() {
        return "Empresa(id=$id, nome=$nome, CNPJ=$cnpj, email=$email, país=$pais, CEP=$cep, descrição=$descricao)"
    }
}
