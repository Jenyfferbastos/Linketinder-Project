# Linketinder

Linketinder é uma aplicação que conecta candidatos e empresas anonimamente, permitindo que ambos encontrem a melhor combinação com base em habilidades e requisitos.

## 🚀 Funcionalidades

- Cadastro de **candidatos** e **empresas**
- Persistência de dados em **JSON**
- Listagem de candidatos e empresas
- Seleção de competências pré-definidas ou personalizadas
- Interface de linha de comando interativa
- - **Validação de dados** utilizando expressões regulares (**regex**) para garantir que informações como CPF, CNPJ, e-mails, telefones, entre outros, estejam no formato correto.


## 🛠 Tecnologias Utilizadas

- **Groovy**
- **JSON para persistência de dados**
- **Paradigma Orientado a Objetos**
- **Spock**

## 📌 Como Executar o Projeto

1. Certifique-se de ter o **Groovy** instalado.
2. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/linketinder.git
   ```
3. Navegue até a pasta do projeto:
   ```sh
   cd linketinder
   ```
4. Execute o programa:
   ```sh
   groovy src/main.groovy
   ```

## ✅ Como Rodar os Testes

### 📌 Via Terminal
1. Navegue até a pasta do projeto:
   ```sh
   cd linketinder
   ```
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
