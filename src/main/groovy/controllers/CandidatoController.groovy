package controllers

import models.Candidato
import services.CandidatoService

class CandidatoController {

    static void menu() {
        println "\n--- CANDIDATO ---"
        println "1. Criar candidato"
        println "2. Listar candidatos"
        println "3. Atualizar candidato"
        println "4. Deletar candidato"
        print "Escolha: "
        def opcao = System.in.newReader().readLine()

        switch (opcao) {
            case "1":
                def c = new Candidato()
                print "Nome: "; c.nome = System.in.newReader().readLine()
                print "Sobrenome: "; c.sobrenome = System.in.newReader().readLine()
                print "Data de nascimento: "; c.dataNascimento = System.in.newReader().readLine()
                print "Email: "; c.email = System.in.newReader().readLine()
                print "CPF: "; c.cpf = System.in.newReader().readLine()
                print "País: "; c.pais = System.in.newReader().readLine()
                print "CEP: "; c.cep = System.in.newReader().readLine()
                print "Descrição: "; c.descricao = System.in.newReader().readLine()
                print "Senha: "; c.senha = System.in.newReader().readLine()
                CandidatoService.criarCandidato(c)
                break

            case "2":
                CandidatoService.listarCandidatos().each { println it }
                break

            case "3":
                def c = new Candidato()
                print "ID do candidato: "; c.id = System.in.newReader().readLine().toInteger()
                print "Nome: "; c.nome = System.in.newReader().readLine()
                print "Sobrenome: "; c.sobrenome = System.in.newReader().readLine()
                print "Data de nascimento: "; c.dataNascimento = System.in.newReader().readLine()
                print "Email: "; c.email = System.in.newReader().readLine()
                print "CPF: "; c.cpf = System.in.newReader().readLine()
                print "País: "; c.pais = System.in.newReader().readLine()
                print "CEP: "; c.cep = System.in.newReader().readLine()
                print "Descrição: "; c.descricao = System.in.newReader().readLine()
                print "Senha: "; c.senha = System.in.newReader().readLine()
                CandidatoService.atualizarCandidato(c)
                break

            case "4":
                print "ID do candidato: "
                def id = System.in.newReader().readLine().toInteger()
                CandidatoService.deletarCandidato(id)
                break
        }
    }
}
