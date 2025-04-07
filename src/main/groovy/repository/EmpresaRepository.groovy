package repository

import groovy.sql.Sql
import models.Empresa

class EmpresaRepository {

    // Usa a conexão do DatabaseConnection
    static final Sql sql = DatabaseConnection.getConnection()

    static List<Empresa> listarEmpresas() {
        List<Empresa> empresas = []
        sql.eachRow("SELECT * FROM empresas") { row ->
            empresas << new Empresa(row.nome, row.email, row.cnpj, row.pais, row.estado, row.cep, row.descricao, row.competencias.split(','))
        }
        return empresas
    }

    static void salvarEmpresa(Empresa empresa) {
        sql.executeInsert("INSERT INTO empresas (nome, email, cnpj, pais, estado, cep, descricao, competencias) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [empresa.nome, empresa.email, empresa.cnpj, empresa.pais, empresa.estado, empresa.cep, empresa.descricao, empresa.competencias.join(',')])
    }
}
