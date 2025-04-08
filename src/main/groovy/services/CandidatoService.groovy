package services

import models.Candidato
import repository.CandidatoRepository

class CandidatoService {

    static void criarCandidato(Candidato candidato) {
        CandidatoRepository.salvar(candidato)
    }

    static List<Candidato> listarCandidatos() {
        return CandidatoRepository.listar()
    }

    static void atualizarCandidato(Candidato candidato) {
        CandidatoRepository.atualizar(candidato)
    }

    static void deletarCandidato(int id) {
        CandidatoRepository.deletar(id)
    }
}
