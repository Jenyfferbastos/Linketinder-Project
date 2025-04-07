# Linketinder

Linketinder é uma aplicação que conecta candidatos e empresas anonimamente, permitindo que ambos encontrem a melhor combinação com base em habilidades e requisitos.

## 🚀 Funcionalidades

- Cadastro de **candidatos** e **empresas**
- Persistência de dados em **Banco de dados PostreSQL (em andamnto)**
- Listagem de candidatos e empresas
- Seleção de competências pré-definidas ou personalizadas
- Interface de linha de comando interativa


## 🛠 Tecnologias Utilizadas

- **Groovy**
- **PostgreSQL para persistência de dados**
- **Paradigma Orientado a Objetos**
- **Spock**
- **dbdiagram.io**

## DER (Diagrama de Entidade Relacionamento)

Link para acesso via dbdiagram.io: https://dbdiagram.io/d/67f3e9204f7afba184a5d150

## 📌 Como Executar o Projeto

1. Certifique-se de ter o **Groovy** instalado.
2. Clone o repositório:
   ```sh
   git clone https://github.com/Jenyfferbastos/Linketinder-Project.git
   ```
3. Navegue até a pasta do projeto:
   ```sh
   cd Linketinder-Project
   ```
4. Execute o programa:
   ```sh
   groovy src/main/groovy/ui/Main.groovy
   ```

## ✅ Como Rodar os Testes

### 📌 Via Terminal
1. Navegue até a pasta do projeto:

2. Execute os testes com o seguinte comando:
   ```sh
   groovy -cp "lib/*:src" src/test/groovy/CandidatoSpec.groovy
   ```
   ```sh
   groovy -cp "lib/*:src" src/test/groovy/EmpresaSpec.groovy
   ```
### 📌 Via IntelliJ IDEA
1. Clique com o botão direito na classe de teste (`CandidatoSpec`) e selecione **Run 'CandidatoSpec'**. Repita o mesmo processo com a classe de teste EmpresaSpec.

Desenvolvido por Jenyffer Sacramento.
