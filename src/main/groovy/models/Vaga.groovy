package models

class Vaga {
    int id
    String nome
    String descricao
    String competencias
    String local

    @Override
    String toString() {
        return "Vaga(id=$id, nome=$nome, descrição=$descricao, competências=$competencias, local=$local)"
    }
}
