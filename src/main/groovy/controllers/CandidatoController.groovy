package controllers

import models.Candidato
import services.CandidatoService
import ui.Interface


class CandidatoController {

    static void listarCandidatos() {
        List<Candidato> candidatos = CandidatoService.listarCandidatos()
        if (candidatos.isEmpty()) {
            println "Nenhum candidato encontrado!"
        } else {
            candidatos.each { println it }
        }
        Interface.voltarOuSair()
    }

    static void cadastrarCandidato(String nome, String email, String cpf, int idade, String estado, String cep, String descricao, List<String> competencias) {
        Candidato candidato = new Candidato(nome, email, cpf, idade, estado, cep, descricao, competencias)
        CandidatoService.cadastrarCandidato(candidato)
        Interface.mostrarMensagemSucesso("Candidato cadastrado com sucesso!")
    }
}

//menu chama controller e controller chama service e service chama repository
