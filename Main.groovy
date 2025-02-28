import src.models.Candidato
import src.models.Empresa
import src.ui.Interface
import java.util.Scanner


class Main {
    static void main(String[] args) {
        List<Candidato> candidatos = Candidato.carregarCandidatos("candidatos.json")
        List<Empresa> empresas = Empresa.carregarEmpresas("empresas.json")
        Scanner scanner = new Scanner(System.in)

        while (true) {
            Interface.exibirMenu()
            String opcao = scanner.nextLine()

            switch (opcao) {
                case '1':
                    listarCandidatos(candidatos)
                    break
                case '2':
                    listarEmpresas(empresas)
                    break
                case '3':
                    candidatos << cadastrarCandidato(scanner)
                    Candidato.salvarCandidatos(candidatos, "candidatos.json")
                    Interface.mostrarMensagemSucesso("Candidato cadastrado com sucesso!")
                    break
                case '4':
                    empresas << cadastrarEmpresa(scanner)
                    Empresa.salvarEmpresas(empresas, "empresas.json")
                    Interface.mostrarMensagemSucesso("Empresa cadastrada com sucesso!")
                    break
                case '5':
                    Candidato.salvarCandidatos(candidatos, "candidatos.json")
                    Empresa.salvarEmpresas(empresas, "empresas.json")
                    println "Saindo..."
                    System.exit(0)
                default:
                    println "Opção inválida!"
            }
        }
    }

    static void listarCandidatos(List<Candidato> candidatos) {
        println "\n📋 Lista de Candidatos:"
        candidatos.each { println it }
        Interface.voltarOuSair()
    }

    static void listarEmpresas(List<Empresa> empresas) {
        println "\n🏢 Lista de Empresas:"
        empresas.each { println it }
        Interface.voltarOuSair()
    }

    static Candidato cadastrarCandidato(Scanner scanner) {
        println "\n📌 Cadastro de Candidato:"
        print "Nome: "
        String nome = scanner.nextLine()
        print "Email: "
        String email = scanner.nextLine()
        print "CPF: "
        String cpf = scanner.nextLine()
        print "Idade: "
        int idade = scanner.nextInt()
        scanner.nextLine()  // Consumir quebra de linha
        print "Estado: "
        String estado = scanner.nextLine()
        print "CEP: "
        String cep = scanner.nextLine()
        print "Descrição: "
        String descricao = scanner.nextLine()

        List<String> competencias = Candidato.escolherCompetencias()

        return new Candidato(nome, email, cpf, idade, estado, cep, descricao, competencias)
    }

    static Empresa cadastrarEmpresa(Scanner scanner) {
        println "\n🏢 Cadastro de Empresa:"
        print "Nome: "
        String nome = scanner.nextLine()
        print "Email Corporativo: "
        String email = scanner.nextLine()
        print "CNPJ: "
        String cnpj = scanner.nextLine()
        print "País: "
        String pais = scanner.nextLine()
        print "Estado: "
        String estado = scanner.nextLine()
        print "CEP: "
        String cep = scanner.nextLine()
        print "Descrição: "
        String descricao = scanner.nextLine()

        List<String> competencias = Empresa.escolherCompetencias()

        return new Empresa(nome, email, cnpj, pais, estado, cep, descricao, competencias)
    }
}
