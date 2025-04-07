package ui

import models.Candidato
import models.Empresa
import services.CandidatoService
import services.EmpresaService

class Interface {
    static void exibirMenu() {
            println "\n=== Linketinder ==="
            println "1. Cadastrar Candidato"
            println "2. Cadastrar Empresa"
            println "3. Listar Candidatos"
            println "4. Listar Empresas"
            println "5. Sair"
            print "Escolha uma opção: "

            switch (System.in.newReader().readLine()) {
                case '1':
                    cadastrarCandidato()
                    break
                case '2':
                    cadastrarEmpresa()
                    break
                case '3':
                    listarCandidatos()
                    break
                case '4':
                    listarEmpresas()
                    break
                case '5':
                    println "Saindo..."
                    return
                default:
                    println "Opção inválida!"
            }
    }

    static void cadastrarCandidato() {
        println "\n=== Cadastro de Candidato ==="
        print "Nome: "
        String nome = System.in.newReader().readLine()
        print "Email: "
        String email = System.in.newReader().readLine()
        print "CPF: "
        String cpf = System.in.newReader().readLine()
        print "Idade: "
        int idade = System.in.newReader().readLine().toInteger()
        print "Estado: "
        String estado = System.in.newReader().readLine()
        print "CEP: "
        String cep = System.in.newReader().readLine()
        print "Descrição: "
        String descricao = System.in.newReader().readLine()
        print "Competências (separadas por vírgula): "
        List<String> competencias = System.in.newReader().readLine().split(',').collect { it.trim() }

        Candidato candidato = new Candidato(nome, email, cpf, idade, estado, cep, descricao, competencias)
        CandidatoService.cadastrarCandidato(candidato) // Chamando o método correto
        println "Candidato cadastrado com sucesso!"
    }

    static void cadastrarEmpresa() {
        println "\n=== Cadastro de Empresa ==="
        print "Nome: "
        String nome = System.in.newReader().readLine()
        print "Email: "
        String email = System.in.newReader().readLine()
        print "CNPJ: "
        String cnpj = System.in.newReader().readLine()
        print "País: "
        String pais = System.in.newReader().readLine()
        print "Estado: "
        String estado = System.in.newReader().readLine()
        print "CEP: "
        String cep = System.in.newReader().readLine()
        print "Descrição: "
        String descricao = System.in.newReader().readLine()
        print "Competências desejadas (separadas por vírgula): "
        List<String> competencias = System.in.newReader().readLine().split(',').collect { it.trim() }

        Empresa empresa = new Empresa(nome, email, cnpj, pais, estado, cep, descricao, competencias)
        EmpresaService.cadastrarEmpresa(empresa)
        println "Empresa cadastrada com sucesso!"
    }

    static void listarCandidatos() {
        println "\n=== Lista de Candidatos ==="
        CandidatoService.listarCandidatos().each { println it }
    }

    static void listarEmpresas() {
        println "\n=== Lista de Empresas ==="
        EmpresaService.listarEmpresas().each { println it }
    }
}
