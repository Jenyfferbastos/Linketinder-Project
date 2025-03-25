# Linketinder - Frontend

Este é o frontend do **Linketinder**, um sistema de conexões entre candidatos e empresas. O projeto foi desenvolvido com o objetivo de criar uma interface de usuário para o MVP do Linketinder, oferecendo funcionalidades como cadastro de candidatos e empresas, visualização anônima de perfis e um gráfico de competências para empresas. 

A comunicação com o backend será implementada em uma fase posterior do projeto (KIT 2), portanto, neste momento o frontend é independente.

## Funcionalidades

O frontend do Linketinder possui as seguintes funcionalidades:

1. **Cadastro de Candidatos**:
   - Permite que os candidatos se cadastrem no sistema informando nome, email, senha, competências e formação acadêmica.
   - Validação de dados utilizando expressões regulares (**regex**) para garantir que informações como CPF, CNPJ, e-mails, telefones, entre outros, estejam no formato correto.

   
2. **Cadastro de Empresas**:
   - Permite que as empresas se cadastrem com informações como nome, email, CNPJ, localização, descrição da empresa e competências desejadas.

3. **Perfil do Candidato**:
   - Exibe as informações do candidato, incluindo suas competências e formação acadêmica.
   - Exibe uma lista de todas as vagas cadastradas.

4. **Perfil da Empresa**:
   - Exibe as informações da empresa, incluindo nome, email, CNPJ, localização e descrição.
   - Exibe uma lista de todos os candidatos cadastrados de maneira anônima, com informações de competências e formação, mas sem revelar o nome dos candidatos (anonimato até o match).
   - Exibe um gráfico de barras mostrando a quantidade de candidatos por competência (ex: quantos candidatos sabem Python, Java, etc.).

5. **Gráfico de Competências**:
   - Exibe um gráfico de barras que mostra a quantidade de candidatos com determinadas competências.
   - O gráfico é interativo e exibe um pop-up com o número de candidatos quando o mouse passa sobre cada barra.

6. **Interatividade**:
   - O gráfico de competências exibe uma janela informando o número de candidatos com as competências ao passar o mouse sobre as barras.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica das páginas.
- **CSS3**: Estilização e layout responsivo das páginas.
- **TypeScript**: Lógica do frontend e manipulação de dados.
- **Chart.js**: Biblioteca para criação do gráfico de barras com as competências dos candidatos.
- **LocalStorage**: Armazenamento local de informações do usuário (empresa ou candidato).

## Como Executar
  
### Passos para Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/Jenyfferbastos/Linketinder-Project.git
   ```
   
2. Navegue até o diretório do projeto:
   ```bash
   cd Linketinder/frontend
   ```

3. Abra o arquivo `index.html` diretamente no seu navegador.


### Como Salvar Dados Locais

- O projeto usa o **LocalStorage** para armazenar os dados inseridos pelos usuários (candidatos e empresas). Esses dados são persistidos no navegador enquanto a página estiver aberta.
  
- Os dados dos perfis de empresas e candidatos são armazenados com base no **email** do usuário como chave padrão para login '123456' no LocalStorage.



**Desenvolvedora**:
- Jenyffer Bastos Sacramento

---