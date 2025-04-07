package services

import models.Empresa
import repository.EmpresaRepository

class EmpresaService {
    static List<Empresa> listarEmpresas() {
        return EmpresaRepository.listarEmpresas()
    }

    static void cadastrarEmpresa(Empresa empresa) {
        EmpresaRepository.salvarEmpresa(empresa)
    }
}
