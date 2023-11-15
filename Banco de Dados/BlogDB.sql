-- Criando o banco de dados BlogDB
CREATE DATABASE IF NOT EXISTS BlogDB;

-- Usando o banco
USE BlogDB;

-- Criando as tabelas
CREATE TABLE IF NOT EXISTS Autor (
    AutorID INT PRIMARY KEY,
    NomeAutor VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Post (
    PostID INT PRIMARY KEY,
    Titulo VARCHAR(255) NOT NULL,
    Conteudo TEXT,
    DataPublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

CREATE TABLE IF NOT EXISTS Comentario (
    ComentarioID INT PRIMARY KEY,
    TextoComentario TEXT NOT NULL,
    DataComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);

-- Adicionando a chave estrangeira AutorID na tabela Post
ALTER TABLE Post ADD CONSTRAINT FK_AutorID FOREIGN KEY (AutorID) REFERENCES Autor(AutorID);

-- Adicionando as chaves estrangeiras AutorID e PostID na tabela Comentario
ALTER TABLE Comentario ADD CONSTRAINT FK_AutorID_C FOREIGN KEY (AutorID) REFERENCES Autor(AutorID);
ALTER TABLE Comentario ADD CONSTRAINT FK_PostID FOREIGN KEY (PostID) REFERENCES Post(PostID);
