package repository

import groovy.sql.Sql
import models.Candidato

class CandidatoRepository {

    static final Sql sql = DatabaseConnection.getConnection()

    static List<Candidato> listarCandidatos() {
        List<Candidato> candidatos = []
        sql.eachRow("SELECT * FROM candidatos") { row ->
            candidatos << new Candidato(row.nome, row.email, row.cpf, row.idade, row.estado, row.cep, row.descricao, row.competencias.split(','))
        }
        return candidatos
    }

    static void salvarCandidato(Candidato candidato) {
        sql.executeInsert("INSERT INTO candidatos (nome, email, cpf, idade, estado, cep, descricao, competencias) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [candidato.nome, candidato.email, candidato.cpf, candidato.idade, candidato.estado, candidato.cep, candidato.descricao, candidato.competencias.join(',')])
    }
}
