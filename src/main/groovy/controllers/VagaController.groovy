package controllers

import models.Vaga
import services.VagaService

class VagaController {

    static void menu() {
        println "\n--- VAGA ---"
        println "1. Criar vaga"
        println "2. Listar vagas"
        println "3. Atualizar vaga"
        println "4. Deletar vaga"
        print "Escolha: "
        def opcao = System.in.newReader().readLine()

        switch (opcao) {
            case "1":
                def v = new Vaga()
                print "Nome da vaga: "; v.nome = System.in.newReader().readLine()
                print "Descrição: "; v.descricao = System.in.newReader().readLine()
                print "Competências exigidas: "; v.competencias = System.in.newReader().readLine()
                print "Local da vaga: "; v.local = System.in.newReader().readLine()
                print "ID da empresa: "; v.empresaId = System.in.newReader().readLine().toInteger()
                VagaService.criarVaga(v)
                break

            case "2":
                VagaService.listarVagas().each { println it }
                break

            case "3":
                def v = new Vaga()
                print "ID da vaga: "; v.id = System.in.newReader().readLine().toInteger()
                print "Nome da vaga: "; v.nome = System.in.newReader().readLine()
                print "Descrição: "; v.descricao = System.in.newReader().readLine()
                print "Competências exigidas: "; v.competencias = System.in.newReader().readLine()
                print "Local da vaga: "; v.local = System.in.newReader().readLine()
                print "ID da empresa: "; v.empresaId = System.in.newReader().readLine().toInteger()
                VagaService.atualizarVaga(v)
                break

            case "4":
                print "ID da vaga: "
                def id = System.in.newReader().readLine().toInteger()
                VagaService.deletarVaga(id)
                break
        }
    }
}
