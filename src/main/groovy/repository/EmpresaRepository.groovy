package repository

import models.Empresa
import repository.DatabaseConnection

class EmpresaRepository {

    static void salvar(Empresa empresa) {
        def sql = DatabaseConnection.getConnection()
        sql.executeInsert("""
            INSERT INTO empresa (nome, cnpj, email, descricao, pais, cep, senha)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, [empresa.nome, empresa.cnpj, empresa.email, empresa.descricao, empresa.pais, empresa.cep, empresa.senha])
    }

    static List<Empresa> listar() {
        def sql = DatabaseConnection.getConnection()
        def empresas = []
        sql.eachRow("SELECT * FROM empresa") {
            empresas << new Empresa(
                    id: it.id,
                    nome: it.nome,
                    cnpj: it.cnpj,
                    email: it.email,
                    descricao: it.descricao,
                    pais: it.pais,
                    cep: it.cep,
                    senha: it.senha
            )
        }
        return empresas
    }

    static void deletar(int id) {
        def sql = DatabaseConnection.getConnection()
        sql.execute("DELETE FROM empresa WHERE id = ?", [id])
    }

    static void atualizar(Empresa empresa) {
        def sql = DatabaseConnection.getConnection()
        sql.executeUpdate("""
            UPDATE empresa SET nome=?, cnpj=?, email=?, descricao=?, pais=?, cep=?, senha=?
            WHERE id=?
        """, [empresa.nome, empresa.cnpj, empresa.email, empresa.descricao,
              empresa.pais, empresa.cep, empresa.senha, empresa.id])
    }
}
