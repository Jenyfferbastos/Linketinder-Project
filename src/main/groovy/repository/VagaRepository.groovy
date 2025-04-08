package repository

import models.Vaga
import repository.DatabaseConnection

class VagaRepository {

    static void salvar(Vaga vaga) {
        def sql = DatabaseConnection.getConnection()
        sql.executeInsert("""
            INSERT INTO vaga (nome, descricao, competencias, local, empresa_id)
            VALUES (?, ?, ?, ?, ?)
        """, [vaga.nome, vaga.descricao, vaga.competencias, vaga.local, vaga.empresaId])
    }

    static List<Vaga> listar() {
        def sql = DatabaseConnection.getConnection()
        def vagas = []
        sql.eachRow("SELECT * FROM vaga") {
            vagas << new Vaga(
                    id: it.id,
                    nome: it.nome,
                    descricao: it.descricao,
                    competencias: it.competencias,
                    local: it.local,
                    empresaId: it.empresa_id
            )
        }
        return vagas
    }

    static void deletar(int id) {
        def sql = DatabaseConnection.getConnection()
        sql.execute("DELETE FROM vaga WHERE id = ?", [id])
    }

    static void atualizar(Vaga vaga) {
        def sql = DatabaseConnection.getConnection()
        sql.executeUpdate("""
            UPDATE vaga SET nome=?, descricao=?, competencias=?, local=?, empresa_id=?
            WHERE id=?
        """, [vaga.nome, vaga.descricao, vaga.competencias, vaga.local, vaga.empresaId, vaga.id])
    }
}
