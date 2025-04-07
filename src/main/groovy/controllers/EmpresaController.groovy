package controllers

import models.Empresa
import services.EmpresaService
import ui.Interface

class EmpresaController {

    static void listarEmpresas() {
        List<Empresa> empresas = EmpresaService.listarEmpresas()
        if (empresas.isEmpty()) {
            println "Nenhuma empresa encontrada!"
        } else {
            empresas.each { println it }
        }
        Interface.voltarOuSair()
    }

    static void cadastrarEmpresa(String nome, String email, String cnpj, String pais, String estado, String cep, String descricao, List<String> competencias) {
        Empresa empresa = new Empresa(nome, email, cnpj, pais, estado, cep, descricao, competencias)
        EmpresaService.cadastrarEmpresa(empresa)
        Interface.mostrarMensagemSucesso("Empresa cadastrada com sucesso!")
    }
}
