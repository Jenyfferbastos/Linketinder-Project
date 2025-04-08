package controllers

import models.Empresa
import services.EmpresaService

class EmpresaController {

    static void menu() {
        println "\n--- EMPRESA ---"
        println "1. Criar empresa"
        println "2. Listar empresas"
        println "3. Atualizar empresa"
        println "4. Deletar empresa"
        print "Escolha: "
        def opcao = System.in.newReader().readLine()

        switch (opcao) {
            case "1":
                def e = new Empresa()
                print "Nome: "; e.nome = System.in.newReader().readLine()
                print "CNPJ: "; e.cnpj = System.in.newReader().readLine()
                print "Email: "; e.email = System.in.newReader().readLine()
                print "Descrição: "; e.descricao = System.in.newReader().readLine()
                print "País: "; e.pais = System.in.newReader().readLine()
                print "CEP: "; e.cep = System.in.newReader().readLine()
                print "Senha: "; e.senha = System.in.newReader().readLine()
                EmpresaService.criarEmpresa(e)
                break

            case "2":
                EmpresaService.listarEmpresas().each { println it }
                break

            case "3":
                def e = new Empresa()
                print "ID da empresa: "; e.id = System.in.newReader().readLine().toInteger()
                print "Nome: "; e.nome = System.in.newReader().readLine()
                print "CNPJ: "; e.cnpj = System.in.newReader().readLine()
                print "Email: "; e.email = System.in.newReader().readLine()
                print "Descrição: "; e.descricao = System.in.newReader().readLine()
                print "País: "; e.pais = System.in.newReader().readLine()
                print "CEP: "; e.cep = System.in.newReader().readLine()
                print "Senha: "; e.senha = System.in.newReader().readLine()
                EmpresaService.atualizarEmpresa(e)
                break

            case "4":
                print "ID da empresa: "
                def id = System.in.newReader().readLine().toInteger()
                EmpresaService.deletarEmpresa(id)
                break
        }
    }
}
