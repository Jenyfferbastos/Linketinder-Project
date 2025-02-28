package src.ui

class Interface {
    static void exibirMenu() {
        println "\nMenu:\n1. Listar Candidatos\n2. Listar Empresas\n3. Cadastrar Candidato\n4. Cadastrar Empresa\n5. Sair"
    }

    static void mostrarMensagemSucesso(String mensagem) {
        println "\n✅ $mensagem"
        voltarOuSair()
    }

    static void voltarOuSair() {
        println "\n1. Voltar ao menu\n2. Sair"
        print "Escolha uma opção: "
        Scanner scanner = new Scanner(System.in)
        String opcao = scanner.nextLine()

        if (opcao == '2') {
            println "Saindo..."
            System.exit(0)
        }
    }
}
