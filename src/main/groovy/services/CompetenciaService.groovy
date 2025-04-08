package services

import models.Competencia
import repository.CompetenciaRepository

class CompetenciaService {

    static void criarCompetencia(Competencia competencia) {
        CompetenciaRepository.salvar(competencia)
    }

    static List<Competencia> listarCompetencias() {
        return CompetenciaRepository.listar()
    }

    static void atualizarCompetencia(Competencia competencia) {
        CompetenciaRepository.atualizar(competencia)
    }

    static void deletarCompetencia(int id) {
        CompetenciaRepository.deletar(id)
    }
}
