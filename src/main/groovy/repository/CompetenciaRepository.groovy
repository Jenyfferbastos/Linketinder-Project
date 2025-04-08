package repository

import models.Competencia
import repository.DatabaseConnection

class CompetenciaRepository {

    static void salvar(Competencia competencia) {
        def sql = DatabaseConnection.getConnection()
        sql.executeInsert("INSERT INTO competencia (nome) VALUES (?)", [competencia.nome])
    }

    static List<Competencia> listar() {
        def sql = DatabaseConnection.getConnection()
        def competencias = []
        sql.eachRow("SELECT * FROM competencia") {
            competencias << new Competencia(id: it.id, nome: it.nome)
        }
        return competencias
    }

    static void deletar(int id) {
        def sql = DatabaseConnection.getConnection()
        sql.execute("DELETE FROM competencia WHERE id = ?", [id])
    }

    static void atualizar(Competencia competencia) {
        def sql = DatabaseConnection.getConnection()
        sql.executeUpdate("UPDATE competencia SET nome=? WHERE id=?", [competencia.nome, competencia.id])
    }
}
