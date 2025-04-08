package controllers

import models.Competencia
import services.CompetenciaService

class CompetenciaController {

    static void menu() {
        println "\n--- COMPETÊNCIA ---"
        println "1. Criar competência"
        println "2. Listar competências"
        println "3. Atualizar competência"
        println "4. Deletar competência"
        print "Escolha: "
        def opcao = System.in.newReader().readLine()

        switch (opcao) {
            case "1":
                def c = new Competencia()
                print "Nome: "; c.nome = System.in.newReader().readLine()
                CompetenciaService.criarCompetencia(c)
                break

            case "2":
                CompetenciaService.listarCompetencias().each { println it }
                break

            case "3":
                def c = new Competencia()
                print "ID da competência: "; c.id = System.in.newReader().readLine().toInteger()
                print "Novo nome: "; c.nome = System.in.newReader().readLine()
                CompetenciaService.atualizarCompetencia(c)
                break

            case "4":
                print "ID da competência: "
                def id = System.in.newReader().readLine().toInteger()
                CompetenciaService.deletarCompetencia(id)
                break
        }
    }
}
