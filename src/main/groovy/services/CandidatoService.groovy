package services

import models.Candidato
import repository.CandidatoRepository

class CandidatoService {
    static List<Candidato> listarCandidatos() {
        return CandidatoRepository.listarCandidatos()
    }

    static void cadastrarCandidato(Candidato candidato) {
        CandidatoRepository.salvarCandidato(candidato)
    }
}
