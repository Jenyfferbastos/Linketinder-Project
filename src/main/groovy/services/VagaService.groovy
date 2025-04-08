package services

import models.Vaga
import repository.VagaRepository

class VagaService {

    static void criarVaga(Vaga vaga) {
        VagaRepository.salvar(vaga)
    }

    static List<Vaga> listarVagas() {
        return VagaRepository.listar()
    }

    static void atualizarVaga(Vaga vaga) {
        VagaRepository.atualizar(vaga)
    }

    static void deletarVaga(int id) {
        VagaRepository.deletar(id)
    }
}
