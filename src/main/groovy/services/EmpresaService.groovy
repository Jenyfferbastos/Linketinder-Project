package services

import models.Empresa
import repository.EmpresaRepository

class EmpresaService {

    static void criarEmpresa(Empresa empresa) {
        EmpresaRepository.salvar(empresa)
    }

    static List<Empresa> listarEmpresas() {
        return EmpresaRepository.listar()
    }

    static void atualizarEmpresa(Empresa empresa) {
        EmpresaRepository.atualizar(empresa)
    }

    static void deletarEmpresa(int id) {
        EmpresaRepository.deletar(id)
    }
}
