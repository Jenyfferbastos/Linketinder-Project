-- Criação das tabelas principais
CREATE TABLE Candidato (
                           id SERIAL PRIMARY KEY,
                           nome VARCHAR(100) NOT NULL,
                           sobrenome VARCHAR(100) NOT NULL,
                           data_nascimento DATE NOT NULL,
                           email VARCHAR(150) UNIQUE NOT NULL,
                           cpf VARCHAR(14) UNIQUE NOT NULL,
                           pais VARCHAR(100),
                           cep VARCHAR(20),
                           descricao TEXT,
                           senha VARCHAR(100) NOT NULL
);

CREATE TABLE Empresa (
                         id SERIAL PRIMARY KEY,
                         nome VARCHAR(150) NOT NULL,
                         cnpj VARCHAR(18) UNIQUE NOT NULL,
                         email VARCHAR(150) UNIQUE NOT NULL,
                         descricao TEXT,
                         pais VARCHAR(100),
                         cep VARCHAR(20),
                         senha VARCHAR(100) NOT NULL
);

CREATE TABLE Competencia (
                             id SERIAL PRIMARY KEY,
                             nome VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Vaga (
                      id SERIAL PRIMARY KEY,
                      titulo VARCHAR(150) NOT NULL,
                      descricao TEXT,
                      local VARCHAR(100),
                      empresa_id INTEGER REFERENCES Empresa(id) ON DELETE CASCADE
);

-- Tabelas auxiliares (relacionamentos)

-- Candidato x Competência (N:N)
CREATE TABLE Candidato_Competencia (
                                       candidato_id INTEGER REFERENCES Candidato(id) ON DELETE CASCADE,
                                       competencia_id INTEGER REFERENCES Competencia(id) ON DELETE CASCADE,
                                       PRIMARY KEY (candidato_id, competencia_id)
);

-- Vaga x Competência (N:N)
CREATE TABLE Vaga_Competencia (
                                  vaga_id INTEGER REFERENCES Vaga(id) ON DELETE CASCADE,
                                  competencia_id INTEGER REFERENCES Competencia(id) ON DELETE CASCADE,
                                  PRIMARY KEY (vaga_id, competencia_id)
);

-- Curtidas: Empresa curte Candidato
CREATE TABLE Curtida_Empresa_Candidato (
                                           empresa_id INTEGER REFERENCES Empresa(id) ON DELETE CASCADE,
                                           candidato_id INTEGER REFERENCES Candidato(id) ON DELETE CASCADE,
                                           PRIMARY KEY (empresa_id, candidato_id)
);

-- Curtidas: Candidato curte Vaga
CREATE TABLE Curtida_Candidato_Vaga (
                                        candidato_id INTEGER REFERENCES Candidato(id) ON DELETE CASCADE,
                                        vaga_id INTEGER REFERENCES Vaga(id) ON DELETE CASCADE,
                                        PRIMARY KEY (candidato_id, vaga_id)
);

-- Inserts

INSERT INTO Competencia (nome) VALUES
                                   ('Java'),
                                   ('Python'),
                                   ('Groovy'),
                                   ('Angular'),
                                   ('Spring Boot');


INSERT INTO Candidato (nome, sobrenome, data_nascimento, email, cpf, pais, cep, descricao, senha) VALUES
                                                                                                      ('Sandubinha', 'Silva', '1995-06-15', 'sandubinha@email.com', '12345678901', 'Brasil', '01001-000', 'Apaixonado por tecnologia e lanches.', 'senha123'),
                                                                                                      ('Maria', 'Oliveira', '1992-04-23', 'maria.oliveira@email.com', '23456789012', 'Brasil', '22040-020', 'Desenvolvedora back-end com experiência em Java.', '123456'),
                                                                                                      ('Carlos', 'Pereira', '1989-09-10', 'carlos.pereira@email.com', '34567890123', 'Brasil', '30130-110', 'Dev full stack com foco em Groovy e Angular.', 'abcdef'),
                                                                                                      ('Ana', 'Costa', '1998-11-02', 'ana.costa@email.com', '45678901234', 'Brasil', '88015-120', 'Graduanda em TI apaixonada por front-end.', 'senha456'),
                                                                                                      ('João', 'Souza', '1990-02-18', 'joao.souza@email.com', '56789012345', 'Brasil', '69005-070', 'Engenheiro de software em busca de novos desafios.', '123789');


INSERT INTO Empresa (nome, cnpj, email, descricao, pais, cep, senha) VALUES
                                                                         ('Pastelsoft', '12345678000100', 'contato@pastelsoft.com.br', 'Empresa especializada em ERPs para restaurantes.', 'Brasil', '01310-000', 'pastel123'),
                                                                         ('TechNova', '98765432000199', 'contato@technova.com', 'Soluções inovadoras para o varejo digital.', 'Brasil', '04567-890', 'nova456'),
                                                                         ('InovaDev', '45678912000188', 'rh@inovadev.com', 'Desenvolvimento de software sob demanda.', 'Brasil', '30140-010', 'devinova'),
                                                                         ('CodeCraft', '78901234000177', 'recrutamento@codecraft.com', 'Foco em aplicações de microserviços.', 'Brasil', '40015-020', 'craft789'),
                                                                         ('WebSolutions', '23456789000166', 'hr@websolutions.com', 'Agência de desenvolvimento front-end e mobile.', 'Brasil', '60060-002', 'websol123');

