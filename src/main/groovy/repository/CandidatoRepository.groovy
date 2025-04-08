package repository

import models.Candidato
import repository.DatabaseConnection

class CandidatoRepository {

    static void salvar(Candidato candidato) {
        def sql = DatabaseConnection.getConnection()
        sql.executeInsert("""
            INSERT INTO candidato (nome, sobrenome, data_nascimento, email, cpf, pais, cep, descricao, senha)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, [candidato.nome, candidato.sobrenome, candidato.dataNascimento, candidato.email, candidato.cpf,
              candidato.pais, candidato.cep, candidato.descricao, candidato.senha])
    }

    static List<Candidato> listar() {
        def sql = DatabaseConnection.getConnection()
        def candidatos = []
        sql.eachRow("SELECT * FROM candidato") {
            candidatos << new Candidato(
                    id: it.id,
                    nome: it.nome,
                    sobrenome: it.sobrenome,
                    dataNascimento: it.data_nascimento,
                    email: it.email,
                    cpf: it.cpf,
                    pais: it.pais,
                    cep: it.cep,
                    descricao: it.descricao,
                    senha: it.senha
            )
        }
        return candidatos
    }

    static void deletar(int id) {
        def sql = DatabaseConnection.getConnection()
        sql.execute("DELETE FROM candidato WHERE id = ?", [id])
    }

    static void atualizar(Candidato candidato) {
        def sql = DatabaseConnection.getConnection()
        sql.executeUpdate("""
            UPDATE candidato SET nome=?, sobrenome=?, data_nascimento=?, email=?, cpf=?, pais=?, cep=?, descricao=?, senha=?
            WHERE id=?
        """, [candidato.nome, candidato.sobrenome, candidato.dataNascimento, candidato.email, candidato.cpf,
              candidato.pais, candidato.cep, candidato.descricao, candidato.senha, candidato.id])
    }
}
